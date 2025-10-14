import React from 'react';
import clsx from 'clsx';
import styles from './secondary-heading.module.scss';
import { Props } from './type';

export const SecondaryHeading: React.FC<Props> = ({ children, className }) => {
    return (
        <h2 className={clsx([styles.heading, className])}>
            {children}
        </h2>
    );
};
