import { createContext } from 'react';
import { type ArticleDto } from 'schemas';

export const ArticlePreviewContext = createContext<ArticleDto>({
    id: '',
    title: '',
    text: '',
    image: '',
});
