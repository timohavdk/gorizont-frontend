import { ButtonIcon } from '@/components/base/button/icon/button-icon';
import IconPlus from '@/components/icons/plus';
import React from 'react';
import './navigation.scss';
import { NavigationProps } from './props';

export const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => (
    <nav className={`navigation ${className}`} {...props}>
        <ButtonIcon size='sm'>
            <IconPlus />
        </ButtonIcon>
    </nav>
);
