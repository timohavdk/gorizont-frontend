import { createContext } from 'react';

export type ArticlePreviewType = {
    id: string;
    title: string;
    text: string;
    image: string;

}
export const ArticlePreviewContext = createContext<ArticlePreviewType>({
    id: "",
    title: "",
    text: "",
    image: '',
});
