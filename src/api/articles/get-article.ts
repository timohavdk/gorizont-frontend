import apiClient from '../api-client';
import { ENDPOINT_ARTICLES } from './constants';
import { Article } from './type';

const getArticle = async (keys: [string, string]) => {
    const [, id] = keys;

    const endpoint = `${ENDPOINT_ARTICLES}/${id}`;

    const result = await apiClient.get<Article>(endpoint);

    return result.data;
};

export default getArticle;
