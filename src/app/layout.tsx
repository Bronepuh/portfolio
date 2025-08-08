import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from './components/GoogleTagManager';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BPS',
  description: 'Bronepuh Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Suspense fallback={<div>Загрузка...</div>}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
