import { ButtonBase } from '@/components/base/button/base/button-base';
import React from 'react';
import './button-primary.scss';
import { ButtonPrimaryProps } from './props';

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, className, ...props }) => {
    return (
        <ButtonBase
            className={`button-primary ${className}`}
            {...props}
        >
            {children}
        </ButtonBase>
    );
};
