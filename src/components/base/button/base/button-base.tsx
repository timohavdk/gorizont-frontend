import React from 'react';
import './button-base.scss';
import { ButtonBaseProps } from './props';

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children, className, ...props }) => {
    return (
        <button
            type="button"
            className={`button-base ${className}`}
            {...props}
        >
            {children}
        </button >
    );
};
