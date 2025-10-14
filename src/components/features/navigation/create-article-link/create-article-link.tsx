import React from 'react';
import { CreateArticleLinkProps } from './props';
import Link from 'next/link';

export const CreateArticleLink: React.FC<CreateArticleLinkProps> = ({ children, className, ...props }) => {
    return (
        <Link {...props} href="/articles/create" className={className}>
            {children}
        </Link>
    );
};
