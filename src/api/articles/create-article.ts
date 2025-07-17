import apiClient from '../api-client';

type MutationArticleResult = {
    id: string | null;
    result: boolean;
}

export type CreatingArticle = {
    text: string;
    title: string;
}

const createArticle = async (url: string, { arg }: { arg: CreatingArticle }) => {
    const result = await apiClient.post<MutationArticleResult>(url, arg);

    return result.data;
};

export default createArticle;
