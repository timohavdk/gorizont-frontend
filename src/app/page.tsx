'use client'

import './page.scss';
import { ArticlesPreviewCatalog } from '@/app/ui/components/pages/home/articles-preview-catalog/articles-preview-catalog';

export default function Home() {
    return (
        <section className={'main-container'}>
            <h1 className={'main-container__articles-catalog-title'}>
                Каталог статей
            </h1>
            <ArticlesPreviewCatalog />
        </section>
    );
}
