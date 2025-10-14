import React from 'react';
import { ButtonBase } from '@/components/base/button/base/button-base';
import { ButtonPrimaryProps } from './props';

import './button-primary.scss';

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
