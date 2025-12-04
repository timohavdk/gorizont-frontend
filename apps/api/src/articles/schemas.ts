import { z } from 'zod';
import { createArticleSchema as baseSchema, serverFileSchema as fileSchema } from 'schemas';

/** Схема создаваемой статьи */
export const createArticleSchema = baseSchema.extend({
    file: fileSchema,
});

/** Создаваемая статья */
export type CreateArticleDto = Pick<z.infer<typeof createArticleSchema>, 'text' | 'title'> & {
    file: Express.Multer.File;
};
