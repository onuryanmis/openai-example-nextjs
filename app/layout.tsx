import '@/styles/global.scss';
import {Inter} from 'next/font/google';
import React from 'react';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Deneme',
    description: 'Deneme',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang='tr' className={inter.className}>
        <body>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}