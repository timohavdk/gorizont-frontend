import { z } from 'zod';

/** Схема статьи */
const articleDto = z.object({
    /** Id */
    id: z.string(),
    /** Заголовок */
    title: z.string(),
    /** Текст */
    text: z.string(),
    /** Изображение */
    image: z.string(),
});

/** Статья */
type ArticleDto = z.infer<typeof articleDto>;

export {
    articleDto,
    type ArticleDto,
};
