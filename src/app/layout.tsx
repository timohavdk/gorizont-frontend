import { Header } from '@/app/ui/components/layout/header/header';
import type { Metadata } from "next";
import interTightFont from "./fonts/inter-tight-font";
import "./setup";
import './layout.scss';
import { Navigation } from './ui/components/layout/navigation/navigation';

export const metadata: Metadata = {
    title: "Горизонт",
    description: "Открой для себя новое",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={interTightFont.className}>
            <body>
                <Header className={'main-layout__header'} />
                <main className={'main-layout'}>
                    {children}
                </main>
                <Navigation className={'main-layout__navigation'} />
            </body>
        </html>
    );
};
