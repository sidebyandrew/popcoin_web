import { Providers } from '@/app/providers';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { ContextProps, TMAProvider } from '@/contexts/TMA';
import { setDebug } from '@tma.js/sdk';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersForContext: ContextProps['headers'] = {};
  headers().forEach((value, key) => (headersForContext[key] = value));
  setDebug(true);
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <TMAProvider headers={headersForContext}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className="relative flex h-screen flex-col">
              <main className="container mx-auto max-w-7xl flex-grow ">
                {children}
              </main>
            </div>
          </Providers>
          <Analytics />
        </TMAProvider>
      </body>
    </html>
  );
}
