import { ArticleDto } from 'schemas';
import apiClient from '../api-client';
import { ENDPOINT_ARTICLES } from './constants';

const getArticles = async () => {
    const result = await apiClient.get<ArticleDto[]>(ENDPOINT_ARTICLES);

    return result.data;
};

export default getArticles;
