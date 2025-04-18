import './globals.css';
import '../../styled-system/css';

import type { Metadata } from 'next';
import React, { ReactNode } from 'react';

import ReactQueryProvider from './providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
