import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArticlePreviewContext } from '@/components/features/article-preview/context/article-preview-context';
import { ArticlePreviewProps } from '@/components/features/article-preview/props';
import { SecondaryHeading } from '@/components/typography/headings/secondary-heading/secondary-heading';
import { PrimaryText } from '@/components/typography/text/primary-text/primary-text';

import styles from './article-preview.module.scss';

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ className, ...props }) => {
    const { title, text, image, id } = useContext(ArticlePreviewContext);

    const link = `/articles/${id}`;

    return (
        <article className={`${styles.preview} ${className}`} {...props}>
            {image && (
                <Image
                    className={styles.image}
                    src={image}
                    alt={text}
                    width={200}
                    height={200}
                />
            )}
            <div className={styles.container}>
                <Link href={link}>
                    <SecondaryHeading className={styles.title}>
                        {title}
                    </SecondaryHeading>
                </Link>

                <PrimaryText>
                    {text}
                </PrimaryText>
            </div>
        </article>
    );
};
