import AppHeader from '@/components/magic/ui/AppHeader';
import TableOfContents from '@/components/magic/ui/TableOfContents';
import Spacer from '@/components/magic/ui/spacer';
import React from 'react';
import Links from './Links';
import SendTransaction from './cards/SendTransactionsCard';
import Wallet from './cards/UserInfoCard';
import WalletMethods from './cards/WalletMethodsCard';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Home({ setAccount }: Props) {
  return (
    <div className="home-page">
      <AppHeader />
      <Spacer size={32} />
      <Links />
      <Spacer size={120} />
      <TableOfContents />
      <div className="cards-container">
        <SendTransaction />
        <Wallet setAccount={setAccount} />
        <WalletMethods setAccount={setAccount} />
        <Spacer size={15} />
        <Links dark />
        <Spacer size={30} />
      </div>
    </div>
  );
}
