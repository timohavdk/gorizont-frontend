import {ButtonIcon} from '@/components/base/button/icon/button-icon';
import IconPlus from '@/components/icons/plus';
import {HeaderProps} from '@/components/layout/header/props';
import React from 'react';
import './header.scss';
import merriweatherFont from '@/app/fonts/merriweather-font';

export const Header: React.FC<HeaderProps> = ({className, ...props}) => (
	<header className={`header ${className} ${merriweatherFont.className}`} {...props}>
		<p className='header__logo'>
			<a className='header__link' href="/">ГОРИЗОНТ</a>
		</p>
		<div className='header__controls'>
			<ButtonIcon size={'sm'} className="header__add-article-button">
				<IconPlus></IconPlus>
			</ButtonIcon>
		</div>
	</header>
);
