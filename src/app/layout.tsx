import { Providers } from '@/app/providers';
import TheNavbar from '@/components/navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { Metadata } from 'next';
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
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex h-screen flex-col">
            <TheNavbar />
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-2">
              {children}
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="homepage"
              >
                <p className="text-secondary">
                  Deban.xyz | Social Events With Pleasure.
                </p>
              </Link>
            </footer>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
