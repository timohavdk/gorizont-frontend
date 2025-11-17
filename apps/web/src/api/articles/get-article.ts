import { ArticleDto } from 'schemas';
import apiClient from '../api-client';
import { ENDPOINT_ARTICLES } from './constants';

const getArticle = async (keys: [string, string]) => {
    const [, id] = keys;

    const endpoint = `${ENDPOINT_ARTICLES}/${id}`;

    const result = await apiClient.get<ArticleDto>(endpoint);

    return result.data;
};

export default getArticle;
