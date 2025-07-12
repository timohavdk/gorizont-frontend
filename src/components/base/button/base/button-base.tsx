import React from 'react';
import './button-base.scss';
import { BUTTON_SIZES, ButtonBaseProps } from './props';

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children, className, size = BUTTON_SIZES.md, ...props }) => {
    return (
        <button
            type="button"
            className={`button-base button-base_${size} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
