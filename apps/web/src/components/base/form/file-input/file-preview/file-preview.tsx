import React from 'react';
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { PrimaryText } from '@/components/typography/text/primary-text/primary-text';
import { SecondaryText } from '@/components/typography/text/secondary-text/secondary-text';
import styles from './file-preview.module.scss';
import getFormatedFileSize from './get-formated-file-size';
import { Props } from './type';
import useFilePreview from './use-file-preview';

export const FilePreview: React.FC<Props> = ({ file, className, onDelete, ...props }) => {
    const rootClass = `${styles.file} ${className}`;
    const previewUrl = useFilePreview(file);

    const isImage = file.type.includes('image');

    const fileIcon = (
        <span className={styles.icon}>
            <FontAwesomeIcon icon={faFile} size="xl" />
        </span>
    );

    const filePreview = (
        previewUrl ? <Image className={styles.icon} src={previewUrl ?? '/'} width={100} height={100} alt="Превью" /> : <></>
    );

    const size = getFormatedFileSize(file.size);

    const onDeleteClick = () => {
        onDelete(file);
    };

    return (
        <div className={rootClass} {...props}>
            <div className={styles.container}>
                {isImage ? filePreview : fileIcon}
                <p className={styles.info}>
                    <PrimaryText
                        tag="span"
                        className={styles.name}
                    >
                        {file.name}
                    </PrimaryText>
                    <SecondaryText tag="span">
                        {size}
                    </SecondaryText>
                </p>
            </div>
            <button className={styles.close} onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    );
};
