import apiClient from "@/api/api-client";
import { URL_ARTICLES } from "@/api/articles/constants";
import useSWR from "swr";

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

const useArticlesPreview = () => {
    const { data, isLoading } = useSWR(URL_ARTICLES, getArticles);

    return {
        data,
        isLoading
    }
}

export default useArticlesPreview;