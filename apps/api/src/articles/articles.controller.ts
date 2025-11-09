import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    Header,
    HttpCode,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleDto } from './dto/article.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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
    @UseInterceptors(FileInterceptor('file'))
    async create(
        @Body() createArticleDto: CreateArticleDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 20 }),
                    new FileTypeValidator({ fileType: '^image\/(png|jpeg)$' }),
                ],
            })
        ) file: Express.Multer.File
    ) {
        return await this.articleService.create(createArticleDto, file);
    }
}
