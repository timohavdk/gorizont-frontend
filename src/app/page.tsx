'use client'

import {ArticlePreview} from '@/components/features/article-preview/article-preview';
import {ArticlePreviewContext} from '@/components/features/article-preview/context/article-preview-context';
import {articles} from '@/mocks/articles';
import './page.scss';


export default function Home() {
	return (
		<section className={'main-container'}>
			{articles.map((article) => (
				<ArticlePreviewContext.Provider key={article.id} value={article}>
					<ArticlePreview className={'main-container__article-preview'}/>
				</ArticlePreviewContext.Provider>
			))}
		</section>
	);
}
