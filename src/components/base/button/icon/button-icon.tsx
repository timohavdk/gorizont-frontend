import {ButtonIconProps} from '@/components/base/button/icon/props';
import React from 'react';
import './button-icon.scss';

export const ButtonIcon: React.FC<ButtonIconProps> = ({children, size, className, ...props}) => {
	return (
		<button type="button" className={`button-icon button-icon_${size} ${className}`}>{children}</button>
	);
}
