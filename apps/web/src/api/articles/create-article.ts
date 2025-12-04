import { resultCreatedArticleDtoShema, type ResultCreatedArticleDto } from 'schemas';
import apiClient from '../api-client';
import createValidation from '../utils/create-validation';
import handleRequest from '../utils/handle-request';

const createArticle = async (url: string, { arg }: { arg: FormData }) => {
    const validation = createValidation<ResultCreatedArticleDto>(resultCreatedArticleDtoShema, url);

    const request = () => apiClient.post(url, arg);

    const result = await handleRequest(request).then(validation);

    return result;
};

export default createArticle;
