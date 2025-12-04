import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import { ENDPOINT_ARTICLES } from '@/api/articles/constants';
import getArticle from '@/api/articles/get-article';

const useArticle = () => {
    const pathname = usePathname();

    const id = pathname.split('/')[2] ?? '';

    const { data, isLoading } = useSWR([ENDPOINT_ARTICLES, id], getArticle);

    return {
        data,
        isLoading,
    };
};

export default useArticle;
