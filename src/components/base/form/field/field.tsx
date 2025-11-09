import React from 'react';
import clsx from 'clsx';
import { FieldError } from '../field-error/field-error';
import styles from './field.module.scss';
import { Props } from './type';

export const Field: React.FC<Props> = ({ children, className, slots }) => {
    return (
        <div className={clsx([styles.field, className])}>
            <div>
                {children}
            </div>
            {slots.error && (
                <FieldError>
                    {slots.error}
                </FieldError>
            )}
        </div>
    );
};
