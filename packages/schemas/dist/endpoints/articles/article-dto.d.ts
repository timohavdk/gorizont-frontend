import { z } from 'zod';
/** Схема статьи */
declare const articleDto: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    text: z.ZodString;
    image: z.ZodString;
}, z.core.$strip>;
/** Статья */
type ArticleDto = z.infer<typeof articleDto>;
export { articleDto, type ArticleDto, };
//# sourceMappingURL=article-dto.d.ts.map