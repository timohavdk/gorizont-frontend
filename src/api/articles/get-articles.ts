import apiClient from "../api-client";

type Article = {
    id: string;
    title: string;
    text: string;
    created_at: string;
    updated_at: string;
    deletedDate: string;
}

const getArticles = async (url: string) => {
    const result = await apiClient.get<Article[]>(url);

    return result.data;
}

export default getArticles;