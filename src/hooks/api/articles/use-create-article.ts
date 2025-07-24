import { URL_ARTICLES } from '@/api/articles/constants'
import createArticle from '@/api/articles/create-article'
import useSWRMutation from 'swr/mutation'

const useCreateArticle = () => {
    const mutation = useSWRMutation(URL_ARTICLES, createArticle);

    return mutation;
};

export default useCreateArticle;