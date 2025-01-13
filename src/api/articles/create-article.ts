import apiClient from '../api-client';
import {URL_ARTICLES} from './constants';

type MutationArticleResult = {
	id: string | null;
	result: boolean;
}

export type CreatingArticle = {
	text: string;
	title: string;
}

const createArticle = async (creatingArticle: CreatingArticle) => {
	const result = await apiClient.post<MutationArticleResult>(URL_ARTICLES, creatingArticle);

	return result.data;
};

export default createArticle;
