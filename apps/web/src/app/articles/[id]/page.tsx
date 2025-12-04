'use client';

import Image from 'next/image';
import { PrimaryHeading } from '@/components/typography/headings/primary-heading/primary-heading';
import { PrimaryText } from '@/components/typography/text/primary-text/primary-text';
import useArticle from '@/hooks/api/articles/use-article';
import styles from './page.module.scss';

const Page = () => {
    const { data } = useArticle();

    return (
        <section className={styles.container}>
            <PrimaryHeading className={styles.heading}>
                {data?.title}
            </PrimaryHeading>

            {data?.image && (
                <Image
                    className={styles.image}
                    src={data?.image}
                    alt={data.text}
                    width={1000}
                    height={200}
                />
            )}

            <PrimaryText className={styles.text}>
                {data?.text}
            </PrimaryText>
        </section>
    );
};

export default Page;
