import type { Metadata } from "next";
import "./globals.css";
import merriweatherFont from "./fonts/merriweather-font";
import "./setup";

export const metadata: Metadata = {
    title: "Горизонт",
    description: "Открой для себя новое",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={merriweatherFont.className}>
            <body>{children}</body>
        </html>
    );
};
