"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  articleDto: () => articleDto,
  clientFileSchema: () => clientFileSchema,
  createArticleSchema: () => createArticleSchema,
  resultCreatedArticleDtoShema: () => resultCreatedArticleDtoShema,
  serverFileSchema: () => serverFileSchema
});
module.exports = __toCommonJS(index_exports);

// src/endpoints/articles/article-dto.ts
var import_zod = require("zod");
var articleDto = import_zod.z.object({
  /** Id */
  id: import_zod.z.string(),
  /** Заголовок */
  title: import_zod.z.string(),
  /** Текст */
  text: import_zod.z.string(),
  /** Изображение */
  image: import_zod.z.string()
});

// src/endpoints/articles/create-article-dto.ts
var import_zod2 = require("zod");
var ERROR_REQUIRED = "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435";
var createArticleSchema = import_zod2.z.object({
  /** Заголовок */
  title: import_zod2.z.string().min(1, { error: ERROR_REQUIRED }).max(100, { error: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }),
  /** Текст */
  text: import_zod2.z.string().min(1, { error: ERROR_REQUIRED }).max(5e3, { error: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 5000 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" })
});
var MAX_FILE_SIZE = 1024 * 1024 * 20;
var FILE_TYPES = ["image/jpeg", "image/png"];
var ERROR_FILE_SIZE = "\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 20 \u041C\u0411";
var ERROR_FILE_TYPE = "\u041D\u0435\u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u0430, \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0442\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432: png, jpeg";
var clientFileSchema = import_zod2.z.file({ error: ERROR_REQUIRED }).max(MAX_FILE_SIZE, { error: ERROR_FILE_SIZE }).mime(FILE_TYPES, { error: ERROR_FILE_TYPE });
var serverFileSchema = import_zod2.z.object({
  size: import_zod2.z.number().max(MAX_FILE_SIZE, { error: ERROR_FILE_SIZE }),
  mimetype: import_zod2.z.enum(FILE_TYPES, { error: ERROR_FILE_TYPE })
});
var resultCreatedArticleDtoShema = import_zod2.z.object({
  id: import_zod2.z.string(),
  result: import_zod2.z.boolean()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  articleDto,
  clientFileSchema,
  createArticleSchema,
  resultCreatedArticleDtoShema,
  serverFileSchema
});
