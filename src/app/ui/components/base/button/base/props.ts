import { ComponentProps } from 'react';

export const BUTTON_SIZES = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
} as const;

type ButtonSize = typeof BUTTON_SIZES [keyof typeof BUTTON_SIZES];

export type ButtonBaseProps = ComponentProps<'button'> & {
	size?: ButtonSize;
};
