import { URL_ARTICLES } from '@/api/articles/constants';
import getArticles from '@/api/articles/get-articles';
import useSWR from 'swr';

const useArticlesPreview = () => {
    const { data, isLoading } = useSWR(URL_ARTICLES, getArticles);

    return {
        data,
        isLoading,
    };
};

export default useArticlesPreview;
