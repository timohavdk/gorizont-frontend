import React from 'react';
import './articles-preview-catalog.scss';
import { ArticlesPreviewCatalogProps } from './props';
import useArticlesPreview from '@/hooks/api/articles/use-articles-preview';
import { ArticlePreviewContext } from '@/components/features/article-preview/context/article-preview-context';
import { ArticlePreview } from '@/components/features/article-preview/article-preview';

export const ArticlesPreviewCatalog: React.FC<ArticlesPreviewCatalogProps> = (props) => {
    const { data, isLoading } = useArticlesPreview();

    if (isLoading) {
        return (
            <div className="articles-preview-catalog__description" {...props}>
                <p>Данные загружаются...</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="articles-preview-catalog__description" {...props}>
                <p>Произошла ошибка в загрузке данных</p>
            </div>
        );
    }

    return (
        <section className="articles-preview-catalog">
            {
                data.map(article => (
                    <ArticlePreviewContext.Provider key={article.id} value={article}>
                        <ArticlePreview className="articles-preview-catalog__article-preview" {...props} />
                    </ArticlePreviewContext.Provider>
                ))
            }
        </section>
    );
};
