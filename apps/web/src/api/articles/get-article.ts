import { type ArticleDto, articleDto } from 'schemas';
import createValidation from '@/api/utils/create-validation';
import apiClient from '../api-client';
import handleRequest from '../utils/handle-request';
import { ENDPOINT_ARTICLES } from './constants';

const getArticle = async (keys: [string, string]) => {
    const [, id] = keys;

    const endpoint = `${ENDPOINT_ARTICLES}/${id}`;

    const validation = createValidation<ArticleDto>(articleDto, endpoint);

    const request = () => apiClient.get<ArticleDto>(endpoint);

    const result = await handleRequest(request).then(validation);

    return result;
};

export default getArticle;
