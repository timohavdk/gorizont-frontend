// src/endpoints/articles/article-dto.ts
import { z } from "zod";
var articleDto = z.object({
  /** Id */
  id: z.string(),
  /** Заголовок */
  title: z.string(),
  /** Текст */
  text: z.string(),
  /** Изображение */
  image: z.string()
});

// src/endpoints/articles/create-article-dto.ts
import { z as z2 } from "zod";
var ERROR_REQUIRED = "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435";
var createArticleSchema = z2.object({
  /** Заголовок */
  title: z2.string().min(1, { error: ERROR_REQUIRED }).max(100, { error: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }),
  /** Текст */
  text: z2.string().min(1, { error: ERROR_REQUIRED }).max(5e3, { error: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 5000 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" })
});
var MAX_FILE_SIZE = 1024 * 1024 * 20;
var FILE_TYPES = ["image/jpeg", "image/png"];
var ERROR_FILE_SIZE = "\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 20 \u041C\u0411";
var ERROR_FILE_TYPE = "\u041D\u0435\u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u0430, \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0442\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432: png, jpeg";
var clientFileSchema = z2.file({ error: ERROR_REQUIRED }).max(MAX_FILE_SIZE, { error: ERROR_FILE_SIZE }).mime(FILE_TYPES, { error: ERROR_FILE_TYPE });
var serverFileSchema = z2.object({
  size: z2.number().max(MAX_FILE_SIZE, { error: ERROR_FILE_SIZE }),
  mimetype: z2.enum(FILE_TYPES, { error: ERROR_FILE_TYPE })
});
var resultCreatedArticleDtoShema = z2.object({
  id: z2.string(),
  result: z2.boolean()
});
export {
  articleDto,
  clientFileSchema,
  createArticleSchema,
  resultCreatedArticleDtoShema,
  serverFileSchema
};
