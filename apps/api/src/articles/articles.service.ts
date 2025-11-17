import { Injectable, Inject, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ArticleInterface } from './interfaces/article.interface';
import { v4 as uuidv4 } from 'uuid';
import { Articles } from './article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import handleAsync from 'src/utils/handle-async';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { DEFAULT_TTL } from 'src/cache/default-ttl';
import { FilesService } from 'src/files/files.service';
import { ResultDeletedArticleDto, ResultEditedArticleDto, type ArticleDto, type ResultCreatedArticleDto } from 'schemas';
import { CreateArticleDto } from './schemas';

const ARTICLE_CACHE_KEY = 'articles';

/** Сервис статей */
@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Articles)
        private articlesRepository: Repository<Articles>,
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache,
        readonly fileService: FilesService,
    ) { }

    async create(article: CreateArticleDto) {
        const { text, title, file } = article;

        const result: ResultCreatedArticleDto = {
            id: null,
            result: false,
        };

        const fileId = await this.fileService.uploadFile(file, 'public', 'articles');

        const entity = this.articlesRepository.create({
            title,
            text,
            id: uuidv4(),
            imageId: fileId,
        });

        const createdArticle = await handleAsync<Articles>(() =>
            this.articlesRepository.save(entity),
        );

        if (!createdArticle) {
            return result;
        }

        result.id = createdArticle.id;

        await this.cacheManager.del(ARTICLE_CACHE_KEY);

        result.result = true;

        return result;
    }

    async getAll() {
        const get = async () => {
            const articles = await this.articlesRepository.find({
                take: 10,
                withDeleted: true,
                order: {
                    created_at: 'desc',
                },
            }).catch(() => {
                throw new Error('Произошла ошибка при поиске статей');
            });

            const data = articles.map(({ imageId }) => this.fileService.getFileUrl(imageId));

            const imageIds = await Promise.allSettled(data);

            const filledArticles = articles.map((article, index) => {
                const image = (imageIds[index].status === 'fulfilled' ? imageIds[index].value : null);
                const { text, title, id } = article;

                return {
                    id,
                    text,
                    title,
                    image,
                };
            });

            return filledArticles;
        };

        const articles = this.cacheManager.wrap(
            ARTICLE_CACHE_KEY,
            get,
            DEFAULT_TTL,
        );

        return articles;
    }

    async getOne(id: string) {
        const get = async (id: string) => {
            const article = await this.articlesRepository.findOne({
                where: {
                    id,
                },
            }).catch(() => {
                throw new NotFoundException();
            });

            if (!article) {
                return null;
            }

            const { imageId } = article;

            let image = null;

            if (imageId) {
                const url = await this.fileService.getFileUrl(imageId);

                image = url;
            }

            const { text, title } = article;

            return {
                text,
                title,
                image,
                id,
            } as ArticleDto;
        };

        const key = `${ARTICLE_CACHE_KEY}:${id}`;

        const article = this.cacheManager.wrap(
            key,
            () => get(id),
            DEFAULT_TTL,
        );

        return article;
    }

    async update(updArticle: ArticleInterface) {
        const result: ResultEditedArticleDto = {
            id: null,
            result: true,
        };

        const oldArticle = await handleAsync(() =>
            this.articlesRepository.findOne({
                where: {
                    id: updArticle.id,
                },
            }),
        );

        if (!oldArticle) {
            return result;
        }

        const newArticle = this.articlesRepository.create(
            Object.assign(oldArticle, updArticle),
        );

        const savedArticle = await handleAsync<Articles>(() =>
            this.articlesRepository.save(newArticle),
        );

        if (savedArticle) {
            result.id = savedArticle.id;
        }

        return result;
    }

    async delete(id: string) {
        const result: ResultDeletedArticleDto = {
            id: null,
            result: true,
        };

        const article = await this.articlesRepository.findOne({
            where: {
                id,
            },
        }).catch(() => {
            throw new NotFoundException();
        });

        const resultDeleted = await this.articlesRepository.softRemove(article).catch(() => {
            throw new InternalServerErrorException();
        });

        const { id: deletedId } = resultDeleted;

        result.id = deletedId;

        return result;
    }
}
