import React from 'react';
import styles from './input.module.scss';
import { InputProps } from './props';

export const Input: React.FC<InputProps> = ({ children, className, label, id, ref, ...props }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            {label &&
                (
                    <label htmlFor={id} className={`${styles.label}`}>{label}</label>
                )
            }
            <input id={id} className={styles.input} {...props} ref={ref} />
        </div>
    );
};
