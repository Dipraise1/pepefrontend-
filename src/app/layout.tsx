import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'PEPE - The Most Memeable Memecoin',
  description: 'PEPE is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced.',
  icons: {
    icon: '/images/hero image .avif',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
} 