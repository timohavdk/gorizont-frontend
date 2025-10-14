import React from 'react';
import Link from 'next/link';
import { CreateArticleLinkProps } from './props';

export const CreateArticleLink: React.FC<CreateArticleLinkProps> = ({ children, className, ...props }) => {
    return (
        <Link {...props} href="/articles/create" className={className}>
            {children}
        </Link>
    );
};
