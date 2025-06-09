import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { cn } from '@/libs/utils';
import { CartProvider } from '@/components/ui/CartContext';

const font = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bordados J&J',
  description: 'Tienda de bordados',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={cn('bg-dark ', font.className)}>
          <main>{children}</main>
        </body>
      </CartProvider>
    </html>
  );
}
