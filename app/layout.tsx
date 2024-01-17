import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { cn } from '@/libs/utils';

const font = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bordados J&J',
  description: 'Tienda de bordados',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-dark text-gray-300', font.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
