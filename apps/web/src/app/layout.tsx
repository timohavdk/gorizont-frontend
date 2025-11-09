import type { Metadata } from 'next';
import interTightFont from '@/assets/fonts/inter-tight-font';
import { Header } from '@/components/layout/header/header';
import { Navigation } from '@/components/layout/navigation/navigation';

import '../assets/styles/setup';
import style from './layout.module.scss';

export const metadata: Metadata = {
    title: 'Горизонт',
    description: 'Открой для себя новое',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={interTightFont.className}>
                <Header className={`${style.header}`} />
                <main className={`${style.layout}`}>
                    <div className={`${style.container}`}>
                        {children}
                    </div>
                </main>
                <Navigation className={`${style.navigation}`} />
            </body>
        </html>
    );
};
