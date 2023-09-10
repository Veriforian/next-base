import React from 'react';

import './globals.css';
import { Poppins, Lora } from 'next/font/google';

const poppins = Poppins({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['200', '300', '400', '600'],
  variable: '--font-poppins',
});

const lora = Lora({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weights: ['200', '400', '600'],
  variable: '--font-lora',
});

export const metadata = {
  title: 'Business SPA',
  description: 'Local Business Base App',
};

export default function RootLayout({ children } = {}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lora.variable} font-sans`}>{children}</body>
    </html>
  );
}
