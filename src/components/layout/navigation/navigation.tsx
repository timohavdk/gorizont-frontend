import { ButtonIcon } from '@/components/base/button/icon/button-icon';
import IconPlus from '@/components/icons/plus';
import React from 'react';
import './navigation.scss';
import { NavigationProps } from './props';
import { CreateArticleLink } from '@/components/features/navigation/create-article-link/create-article-link';

export const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => (
    <nav className={`navigation ${className}`} {...props}>
        <CreateArticleLink>
            <ButtonIcon size="sm">
                <IconPlus />
            </ButtonIcon>
        </CreateArticleLink>
    </nav>
);
