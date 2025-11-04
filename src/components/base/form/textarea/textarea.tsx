import React from 'react';
import { TextareaProps } from './props';
import styles from './textarea.module.scss';

export const Textarea: React.FC<TextareaProps> = ({ className, label, id, ref, ...props }) => {
    return (
        <div className={`${styles.container}`}>
            {label
                && (
                    <label htmlFor={id} className={`${styles.label}`}>{label}</label>
                )}
            <textarea id={id} className={`${styles.textarea} ${className}`} {...props} ref={ref} />
        </div>
    );
};
