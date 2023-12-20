'use client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TonConnectUIProvider
      manifestUrl="https://popcoin-web.vercel.app/tonconnect-manifest.json"
      uiPreferences={{ theme: 'SYSTEM' }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/ThePopcoinBot/app',
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
}
