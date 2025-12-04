import useSWRMutation from 'swr/mutation';
import { ENDPOINT_ARTICLES } from '@/api/articles/constants';
import createArticle from '@/api/articles/create-article';

const useCreateArticle = () => {
    const mutation = useSWRMutation(ENDPOINT_ARTICLES, createArticle);

    return mutation;
};

export default useCreateArticle;
