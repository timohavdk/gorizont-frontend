import { ArticlePreviewTextProps } from '@/components/features/article-preview/text/props';
import React from 'react';
import './article-preview-text.scss'

export const ArticlePreviewText: React.FC<ArticlePreviewTextProps> = ({ children, className, ...props }) => {
    return (
        <p
            className={`article-preview-text ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};
