import React from 'react';
import clsx from 'clsx';

import styles from './field-error.module.scss';
import { Props } from './type';

export const FieldError: React.FC<Props> = ({ className, children }) => {
    return (
        <span className={clsx([styles.error, className])}>
            {children}
        </span>
    );
};
