import { z } from 'zod';
/** Базовая схема создаваемой статьи */
declare const createArticleSchema: z.ZodObject<{
    title: z.ZodString;
    text: z.ZodString;
}, z.core.$strip>;
/** Схема валидации на клиенте */
declare const clientFileSchema: z.ZodFile;
/** Схема валидации на сервере */
declare const serverFileSchema: z.ZodObject<{
    size: z.ZodNumber;
    mimetype: z.ZodEnum<{
        [x: string]: string;
    }>;
}, z.core.$strip>;
/** Схема результата созданной статьи */
declare const resultCreatedArticleDtoShema: z.ZodObject<{
    id: z.ZodString;
    result: z.ZodBoolean;
}, z.core.$strip>;
/** Схема результата отредактированной статьи */
declare const resultEditedArticleDtoShema: z.ZodObject<{
    id: z.ZodString;
    result: z.ZodBoolean;
}, z.core.$strip>;
/** Схема результата удаленной статьи */
declare const resultDeletedArticleDtoShema: z.ZodObject<{
    id: z.ZodString;
    result: z.ZodBoolean;
}, z.core.$strip>;
/** Результат созданной статьи */
type ResultCreatedArticleDto = z.infer<typeof resultCreatedArticleDtoShema>;
/** Результат созданной статьи */
type ResultEditedArticleDto = z.infer<typeof resultEditedArticleDtoShema>;
/** Результат созданной статьи */
type ResultDeletedArticleDto = z.infer<typeof resultDeletedArticleDtoShema>;
export { createArticleSchema, clientFileSchema, serverFileSchema, resultCreatedArticleDtoShema, type ResultCreatedArticleDto, type ResultEditedArticleDto, type ResultDeletedArticleDto, };
//# sourceMappingURL=create-article-dto.d.ts.map