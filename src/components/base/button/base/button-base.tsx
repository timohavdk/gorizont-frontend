import React from 'react';
import style from './button-base.module.scss';
import { BUTTON_SIZES, ButtonBaseProps } from './props';
import { Loader } from '@/components/icons/loader/loader';

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children, className, isLoading = false, size = BUTTON_SIZES.md, ...props }) => {
    const sizeClass = `button-base_${size}`;
    const buttonClasses = `${style['button-base']} ${style[sizeClass]}`;

    return (
        <button
            type="button"
            className={`${buttonClasses} ${className}`}
            {...props}
        >
            {isLoading ? <Loader className={`${style['loader']}`} /> : children}
        </button>
    );
};
