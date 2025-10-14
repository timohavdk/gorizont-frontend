import React, { ChangeEvent, useRef } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './file-input.module.scss';
import { FileInputProps } from './props';

export const FileInput: React.FC<FileInputProps> = ({
    onChange,
    className,
    label,
    id,
    maxFilesCount = 1,
    mimeTypes = [],
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

        // @todo Исправить ошибку при повторном воде файла
        onChange(files);
    };

    return (
        <button
            type="button"
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            <span className={styles.label}>
                {label}
            </span>
            <FontAwesomeIcon
                icon={faPlus}
                className={styles.icon}
                size="sm"
            />
            <input
                type="file"
                multiple={isMultiple}
                accept={accept}
                id={id}
                ref={(el) => {
                    inputRef.current = el;
                    if (typeof ref === 'function') {
                        ref(el);
                    }
                    else if (ref) {
                        (ref as React.MutableRefObject<HTMLInputElement | null>).current
                            = el;
                    }
                }}
                className={styles.input}
                onChange={onInput}
                {...props}
            />
        </button>
    );
};
