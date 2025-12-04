import { MergeFormdataInterceptor } from './../interseptors/merge-formdata-interseptor';
import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Put,
    UseInterceptors,
    UsePipes,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { type ArticleDto } from 'schemas';
import { FileInterceptor } from '@nestjs/platform-express';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { CreateArticleDto, createArticleSchema } from './schemas';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articleService: ArticlesService) { }

    @Get()
    getAll() {
        return this.articleService.getAll();
    }

    @Get(':id')
    getOne(@Param() params: any) {
        return this.articleService.getOne(params.id);
    }

    @Put()
    update(@Body() articleDto: ArticleDto) {
        return this.articleService.update(articleDto);
    }

    @Delete(':id')
    delete(@Param() params: any) {
        return this.articleService.delete(params.id);
    }

    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(201)
    @UseInterceptors(FileInterceptor('file'), MergeFormdataInterceptor)
    @UsePipes(new ZodValidationPipe(createArticleSchema))
    async create(
        @Body() createArticleDto: CreateArticleDto,
    ) {
        return await this.articleService.create(createArticleDto);
    }
}
