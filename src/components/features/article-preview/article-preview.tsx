import { ArticlePreviewContext } from '@/components/features/article-preview/context/article-preview-context';
import { ArticlePreviewProps } from '@/components/features/article-preview/props';
import { ArticlePreviewText } from '@/components/features/article-preview/text/article-preview-text';
import { ArticlePreviewTitle } from '@/components/features/article-preview/title/article-preview-title';
import React, { useContext } from 'react';
import Image from 'next/image';

import styles from './article-preview.module.scss';

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ className, ...props }) => {
    const { title, text, image } = useContext(ArticlePreviewContext);

    return (
        <article className={`${styles.preview} ${className}`} {...props}>
            <Image className={styles.image} src={image} alt={text} width={200} height={200}></Image>
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
};
