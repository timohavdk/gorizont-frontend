import { type ArticleDto, articleDto } from 'schemas';
import createValidation from '@/api/utils/create-validation';
import apiClient from '../api-client';
import { ENDPOINT_ARTICLES } from './constants';

const getArticle = async (keys: [string, string]) => {
    const [, id] = keys;

    const endpoint = `${ENDPOINT_ARTICLES}/${id}`;

    const validation = createValidation<ArticleDto>(articleDto, endpoint);

    const result = await apiClient.get<ArticleDto>(endpoint)
        .then(({ data }) => data)
        .then(validation);

    return result;
};

export default getArticle;
