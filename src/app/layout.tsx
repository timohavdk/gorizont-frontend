import { Header } from '@/components/layout/header/header';
import type { Metadata } from "next";
import "./setup";
import './layout.scss';
import { Navigation } from '@/components/layout/navigation/navigation';
import interTightFont from '@/assets/fonts/inter-tight-font';

export const metadata: Metadata = {
    title: "Горизонт",
    description: "Открой для себя новое",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={interTightFont.className}>
                <Header className={'main-layout__header'} />
                <main className={'main-layout'}>
                    {children}
                </main>
                <Navigation className={'main-layout__navigation'} />
            </body>
        </html>
    );
};
