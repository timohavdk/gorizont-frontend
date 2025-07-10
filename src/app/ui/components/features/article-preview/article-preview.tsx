import { ArticlePreviewContext } from '@/app/ui/components/features/article-preview/context/article-preview-context';
import { ArticlePreviewProps } from '@/app/ui/components/features/article-preview/props';
import { ArticlePreviewText } from '@/app/ui/components/features/article-preview/text/article-preview-text';
import { ArticlePreviewTitle } from '@/app/ui/components/features/article-preview/title/article-preview-title';
import React, { useContext } from 'react';
import './article-preview.scss';

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ className, children, ...props }) => {
    const { title, text } = useContext(ArticlePreviewContext);

    return (
        <article className={`article-preview ${className}`} {...props}>
            <ArticlePreviewTitle className={'article-preview__title'}>
                {title}
            </ArticlePreviewTitle>
            <ArticlePreviewText>
                {text}
            </ArticlePreviewText>
        </article>
    );
}
