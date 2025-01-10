import {createContext} from 'react';

export type ArticlePreviewType = {
	id: string;
	title: string;
	text: string;
	created_at: string;
	updated_at: string;
	deletedDate: string | null;
}
export const ArticlePreviewContext = createContext<ArticlePreviewType>({
	id:          "",
	title:       "",
	text:        "",
	created_at:  "",
	updated_at:  "",
	deletedDate: null
});
