import { useMagicContext } from '@/components/magic/MagicProvider';
import AppHeader from '@/components/magic/ui/AppHeader';
import ConnectButton from '@/components/magic/ui/ConnectButton';
import Spacer from '@/components/magic/ui/spacer';
import React, { useCallback, useState } from 'react';
import Links from './Links';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const MagicLogin = ({ setAccount }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const { magic } = useMagicContext();

  const connect = useCallback(async () => {
    if (!magic) return;
    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log('Logged in user:', accounts[0]);
      localStorage.setItem('user', accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  return (
    <div className="login-page">
      <AppHeader />
      <Spacer size={32} />
      <Spacer size={20} />
      <ConnectButton onClick={connect} disabled={disabled} />
      <Links footer />
    </div>
  );
};

export default MagicLogin;
