import useSWR from 'swr';
import { ENDPOINT_ARTICLES } from '@/api/articles/constants';
import getArticles from '@/api/articles/get-articles';

const useArticlesPreview = () => {
    const { data, isLoading } = useSWR(ENDPOINT_ARTICLES, getArticles);

    return {
        data,
        isLoading,
    };
};

export default useArticlesPreview;
