import { resultCreatedArticleDtoShema, type ResultCreatedArticleDto } from 'schemas';
import apiClient from '../api-client';
import createValidation from '../utils/create-validation';

const createArticle = async (url: string, { arg }: { arg: FormData }) => {
    const validation = createValidation<ResultCreatedArticleDto>(resultCreatedArticleDtoShema, url);

    const result = await apiClient.post(url, arg)
        .then(({ data }) => data)
        .then(validation);

    return result;
};

export default createArticle;
