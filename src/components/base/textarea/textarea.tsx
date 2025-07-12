import React from 'react';
import styles from './textarea.module.scss';
import { TextareaProps } from './props';

export const Textarea: React.FC<TextareaProps> = ({ children, className, label, id, ...props }) => {
    return (
        <div className={`${styles.container}`}>
            {label &&
                (
                    <label htmlFor={id} className={`${styles.label}`}>{label}</label>
                )
            }
            <textarea id={id} className={`${styles.textarea} ${className}`} {...props} />
        </div>
    );
};
