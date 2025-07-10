import { ButtonIcon } from '@/app/ui/components/base/button/icon/button-icon';
import IconPlus from '@/app/ui/components/icons/plus';
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
