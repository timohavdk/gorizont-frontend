import apiClient from '../api-client';

type MutationArticleResult = {
    id: string | null;
    result: boolean;
}

const createArticle = async (url: string, { arg }: { arg: FormData }) => {
    const result = await apiClient.post<MutationArticleResult>(url, arg);

    return result.data;
};

export default createArticle;
