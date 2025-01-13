import { ArticlePreviewTitleProps } from '@/app/ui/components/features/article-preview/title/props';
import React from 'react';
import './article-preview-title.scss'
import merriweatherFont from '@/app/fonts/merriweather-font';

export const ArticlePreviewTitle: React.FC<ArticlePreviewTitleProps> = ({ children, className, ...props }) => {
    return (
        <h5
            className={`article-preview-title ${className} ${merriweatherFont.className}`}
            {...props}
        >
            {children}
        </h5>
    );
};
