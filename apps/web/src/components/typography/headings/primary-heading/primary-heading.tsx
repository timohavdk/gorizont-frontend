import React from 'react';
import styles from './primary-heading.module.scss';
import { PrimaryHeadingProps } from './props';

export const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({ children, className, ...props }) => {
    return <h1 className={`${styles.heading} ${className}`} {...props}>{children}</h1>;
};
