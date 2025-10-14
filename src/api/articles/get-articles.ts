import apiClient from '../api-client';

export type Article = {
    id: string;
    title: string;
    text: string;
    image: string;
};

const getArticles = async (url: string) => {
    const result = await apiClient.get<Article[]>(url);

    return result.data;
};

export default getArticles;
