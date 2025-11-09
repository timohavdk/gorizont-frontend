import { createContext } from 'react';
import { Article } from '@/api/articles/get-articles';

export const ArticlePreviewContext = createContext<Article>({
    id: '',
    title: '',
    text: '',
    image: '',
});
