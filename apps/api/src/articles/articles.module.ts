import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Articles } from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import CacheModule from 'src/cache/cache-module';
import { FilesModule } from 'src/files/file.module';

@Module({
    imports: [TypeOrmModule.forFeature([Articles]), CacheModule, FilesModule],
    controllers: [ArticlesController],
    providers: [ArticlesService],
    exports: [ArticlesService, TypeOrmModule],
})
export class ArticlesModule {
    constructor(private articlesService: ArticlesService) { }
}
