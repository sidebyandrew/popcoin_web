'use client';

import { useMagicContext } from '@/components/magic/MagicProvider';
import ConnectButton from '@/components/magic/ui/ConnectButton';
import { Avatar, AvatarIcon } from '@nextui-org/avatar';
import { useCallback, useEffect, useState } from 'react';

export const MagicConnect = () => {
  // for magic login
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setAccount(user);
  }, []);

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

  const disconnect = useCallback(async () => {
    if (!magic) return;
    try {
      setDisabled(true);
      await magic.wallet.disconnect();
      localStorage.removeItem('user');
      setDisabled(false);
      setAccount(null);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  if (!account) {
    return <ConnectButton onClick={connect} disabled={disabled} />;
  } else {
    return (
      <Avatar
        // onClick={disconnect}
        icon={<AvatarIcon />}
        classNames={{
          base: 'bg-gradient-to-br from-[#00B4FF] to-[#FF7000]',
          icon: 'text-black/80 cursor-pointer',
        }}
      />
    );
  }
};
