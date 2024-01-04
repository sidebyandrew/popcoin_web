// Tab1Content.tsx
import GameListTab from '@/components/tab1/GameListTab';
import SliderImage from '@/components/tab1/SliderImage';
import UserProfile from '@/components/tab1/UserProfile';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import React from 'react';

const Tab1Content: React.FC = () => (
  <TonConnectUIProvider
    manifestUrl="https://popcoin-web.vercel.app/tonconnect-manifest.json"
    uiPreferences={{ theme: 'SYSTEM' }}
    actionsConfiguration={{
      twaReturnUrl: 'https://t.me/ThePopcoinBot/app',
    }}
  >
    <div>
      <UserProfile />
      <SliderImage />
      <GameListTab />
    </div>
  </TonConnectUIProvider>
);

export default Tab1Content;
