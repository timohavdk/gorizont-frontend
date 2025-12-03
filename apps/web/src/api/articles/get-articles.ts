import { type ArticleDto, articleDto } from 'schemas';
import { ENDPOINT_ARTICLES } from '@/api/articles/constants';
import createValidation from '@/api/utils/create-validation';
import apiClient from '../api-client';

const getArticles = async () => {
    const validation = createValidation<ArticleDto[]>(articleDto.array(), ENDPOINT_ARTICLES);

    const result = await apiClient.get<ArticleDto[]>(ENDPOINT_ARTICLES)
        .then(({ data }) => data)
        .then(validation);

    return result;
};

export default getArticles;
