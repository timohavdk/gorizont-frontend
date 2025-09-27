import { ArticlePreviewContext } from '@/components/features/article-preview/context/article-preview-context';
import { ArticlePreviewProps } from '@/components/features/article-preview/props';
import { ArticlePreviewText } from '@/components/features/article-preview/text/article-preview-text';
import { ArticlePreviewTitle } from '@/components/features/article-preview/title/article-preview-title';
import React, { useContext } from 'react';

import styles from './article-preview.module.scss';

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ className, children, ...props }) => {
    const { title, text, image } = useContext(ArticlePreviewContext);

    return (
        <article className={`${styles.preview} ${className}`} {...props}>
            <img className={styles.image} src={image}></img>
            <div className={styles.container}>
                <ArticlePreviewTitle className={styles.title}>
                    {title}
                </ArticlePreviewTitle>
                <ArticlePreviewText>
                    {text}
                </ArticlePreviewText>
            </div>
        </article>
    );
}
