import { Header } from '@/app/ui/components/layout/header/header';
import type { Metadata } from "next";
import merriweatherFont from "./fonts/merriweather-font";
import "./setup";
import './layout.scss';

export const metadata: Metadata = {
    title: "Горизонт",
    description: "Открой для себя новое",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={merriweatherFont.className}>
            <body>
                <Header className={'main-layout__header'} />
                <main className={'main-layout'}>
                    {children}
                </main>
            </body>
        </html>
    );
};
