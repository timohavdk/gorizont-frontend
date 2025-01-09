import {HeaderProps} from '@/components/layout/header/props';
import React from 'react';
import './header.scss';

export const Header: React.FC<HeaderProps> = ({ className, ...props}) => (
    <header className={`header ${className}`} {...props}>
		<p className='header__title'>
			<a className='header__link' href="/">ГОРИЗОНТ</a>
		</p>
    </header>
);
