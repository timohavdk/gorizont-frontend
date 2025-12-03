import { type ArticleDto, articleDto } from 'schemas';
import { ENDPOINT_ARTICLES } from '@/api/articles/constants';
import createValidation from '@/api/utils/create-validation';
import apiClient from '../api-client';
import handleRequest from '../utils/handle-request';

const getArticles = async () => {
    const validation = createValidation<ArticleDto[]>(articleDto.array(), ENDPOINT_ARTICLES);

    const request = () => apiClient.get<ArticleDto[]>(ENDPOINT_ARTICLES);

    const result = handleRequest(request).then(validation);

    return result;
};

export default getArticles;
