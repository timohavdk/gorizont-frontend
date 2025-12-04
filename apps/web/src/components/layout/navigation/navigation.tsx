import React from 'react';
import { ButtonIcon } from '@/components/base/button/icon/button-icon';
import { CreateArticleLink } from '@/components/features/navigation/create-article-link/create-article-link';
import IconPlus from '@/components/icons/plus';
import { NavigationProps } from './props';

import './navigation.scss';

export const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => (
    <nav className={`navigation ${className}`} {...props}>
        <CreateArticleLink>
            <ButtonIcon size="sm">
                <IconPlus />
            </ButtonIcon>
        </CreateArticleLink>
    </nav>
);
