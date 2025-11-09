import apiClient from '../api-client';
import { ENDPOINT_ARTICLES } from './constants';
import { Article } from './type';

const getArticles = async () => {
    const result = await apiClient.get<Article[]>(ENDPOINT_ARTICLES);

    return result.data;
};

export default getArticles;
