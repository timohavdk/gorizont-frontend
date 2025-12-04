import { z } from 'zod';

const ERROR_REQUIRED = 'Обязательное поле';

/** Базовая схема создаваемой статьи */
const createArticleSchema = z.object({
    /** Заголовок */
    title: z.string()
        .min(1, { error: ERROR_REQUIRED })
        .max(100, { error: 'Заголовок должен быть меньше 100 символов' }),
    /** Текст */
    text: z.string()
        .min(1, { error: ERROR_REQUIRED })
        .max(5000, { error: 'Текст должен быть меньше 5000 символов' }),
});

const MAX_FILE_SIZE = 1024 * 1024 * 20;
const FILE_TYPES = ['image/jpeg', 'image/png'];

const ERROR_FILE_SIZE = 'Файл слишком большой, максимальный размер 20 МБ';
const ERROR_FILE_TYPE = 'Неподходящий тип файла, допустимые типы файлов: png, jpeg';

/** Схема валидации на клиенте */
const clientFileSchema = z.file({ error: ERROR_REQUIRED })
    .max(MAX_FILE_SIZE, { error: ERROR_FILE_SIZE })
    .mime(FILE_TYPES, { error: ERROR_FILE_TYPE });

/** Схема валидации на сервере */
const serverFileSchema = z.object({
    size: z.number().max(MAX_FILE_SIZE, { error: ERROR_FILE_SIZE }),
    mimetype: z.enum(FILE_TYPES, { error: ERROR_FILE_TYPE }),
});

/** Схема результата созданной статьи */
const resultCreatedArticleDtoShema = z.object({
    id: z.string(),
    result: z.boolean(),
});

/** Схема результата отредактированной статьи */
const resultEditedArticleDtoShema = resultCreatedArticleDtoShema;

/** Схема результата удаленной статьи */
const resultDeletedArticleDtoShema = resultCreatedArticleDtoShema;

/** Результат созданной статьи */
type ResultCreatedArticleDto = z.infer<typeof resultCreatedArticleDtoShema>;

/** Результат созданной статьи */
type ResultEditedArticleDto = z.infer<typeof resultEditedArticleDtoShema>;

/** Результат созданной статьи */
type ResultDeletedArticleDto = z.infer<typeof resultDeletedArticleDtoShema>;

export {
    createArticleSchema,
    clientFileSchema,
    serverFileSchema,
    resultCreatedArticleDtoShema,
    type ResultCreatedArticleDto,
    type ResultEditedArticleDto,
    type ResultDeletedArticleDto,
};
