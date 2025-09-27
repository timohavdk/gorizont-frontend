import React from 'react';
import { Props } from './type';
import useFilePreview from './use-file-preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './file-preview.module.scss';
import getFormatedFileSize from './get-formated-file-size';
import { PrimaryText } from '@/components/typography/text/primary-text/primary-text';
import { SecondaryText } from '@/components/typography/text/secondary-text/secondary-text';

export const FilePreview: React.FC<Props> = ({ file, className, onDelete, ...props }) => {
    const rootClass = `${styles.file} ${className}`;
    const previewUrl = useFilePreview(file);

    const isImage = file.type.includes('image');

    const fileIcon = (
        <span className={styles.icon}>
            <FontAwesomeIcon icon={faFile} size='xl' />
        </span>
    );

    const filePreview = (
        previewUrl ? <img className={styles.icon} src={previewUrl ?? '/'} /> : <></>
    );

    const size = getFormatedFileSize(file.size);

    const onDeleteClick = () => {
        onDelete(file)
    }

    return (
        <div className={rootClass} {...props}>
            <div className={styles.container}>
                {isImage ? filePreview : fileIcon}
                <p className={styles.info}>
                    <PrimaryText
                        tag={'span'}
                        className={styles.name}
                    >
                        {file.name}
                    </PrimaryText>
                    <SecondaryText tag={'span'}>
                        {size}
                    </SecondaryText>
                </p>
            </div>
            <button className={styles.close} onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div >
    );
};
