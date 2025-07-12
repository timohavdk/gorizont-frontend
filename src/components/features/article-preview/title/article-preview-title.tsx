import { ArticlePreviewTitleProps } from '@/components/features/article-preview/title/props';
import React from 'react';
import './article-preview-title.scss'

export const ArticlePreviewTitle: React.FC<ArticlePreviewTitleProps> = ({ children, className, ...props }) => {
    return (
        <h5
            className={`article-preview-title ${className}`}
            {...props}
        >
            {children}
        </h5>
    );
};
