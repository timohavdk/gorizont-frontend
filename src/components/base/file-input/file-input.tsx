import React, { ChangeEvent, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FileInputProps } from './props';

import styles from './file-input.module.scss';

export const FileInput: React.FC<FileInputProps> = ({
    children,
    onChange,
    className,
    label,
    id,
    maxFileSize = 1024 * 1024,
    maxFilesCount = 1,
    mimeTypes = [],
    value,
    ref,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isMultiple = maxFilesCount > 1;
    const accept = mimeTypes.join(', ');

    const onClick = () => {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.click();
    };

    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;

        if (!files) {
            return;
        }

        onChange(files);
    };

    return (
        <button
            type='button'
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            <span className={styles.label}>
                {label}
            </span>
            <FontAwesomeIcon
                icon={faPlus}
                className={styles.icon}
                size={'sm'}
            />
            <input
                type='file'
                ref={ref}
                multiple={isMultiple}
                accept={accept}
                id={id}
                ref={(el) => {
                    inputRef.current = el;
                    if (typeof ref === 'function') {
                        ref(el);
                    } else if (ref) {
                        (ref as React.MutableRefObject<HTMLInputElement | null>).current =
                            el;
                    }
                }}
                className={styles.input}
                onChange={onInput}
                {...props}
            />
        </button>
    );
};
