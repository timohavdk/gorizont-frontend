import React from 'react';
import Link from 'next/link';
import { ButtonIcon } from '@/components/base/button/icon/button-icon';
import { CreateArticleLink } from '@/components/features/navigation/create-article-link/create-article-link';
import IconPlus from '@/components/icons/plus';
import { HeaderProps } from '@/components/layout/header/props';

import './header.scss';

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => (
    <header className={`header ${className}`} {...props}>
        <p className="header__logo">
            <Link className="header__link" href="/">ГОРИЗОНТ</Link>
        </p>
        <div className="header__controls">
            <CreateArticleLink>
                <ButtonIcon size="sm" className="header__add-article-button">
                    <IconPlus></IconPlus>
                </ButtonIcon>
            </CreateArticleLink>
        </div>
    </header>
);
