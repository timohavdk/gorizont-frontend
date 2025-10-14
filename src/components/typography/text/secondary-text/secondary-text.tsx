import React from 'react';
import { Props } from '../type';

import styles from './secondary-text.module.scss';

export const SecondaryText = <TTag extends React.ElementType>({
    tag: Tag = 'p' as TTag,
    children,
    className,
    ...props
}: Props<TTag>) => {
    const rootClass = `${styles.text} ${className ?? ''}`;

    return React.createElement(
        Tag,
        { className: rootClass, ...props },
        children,
    );
};
