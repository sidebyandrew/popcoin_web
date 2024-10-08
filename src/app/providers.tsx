'use client';

import { NextUIProvider } from '@nextui-org/system';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <TonConnectUIProvider
        manifestUrl="https://popcoin-web.vercel.app/tonconnect-manifest.json"
        uiPreferences={{
          theme: THEME.DARK,
        }}
        actionsConfiguration={{
          twaReturnUrl: 'https://t.me/ThePopcoinBot/app',
        }}
      >
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </TonConnectUIProvider>
    </NextUIProvider>
  );
}
