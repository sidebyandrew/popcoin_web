import { useMagicContext } from '@/components/magic/MagicProvider';
import ErrorText from '@/components/magic/ui/error';
import Spacer from '@/components/magic/ui/spacer';
import Image from 'next/image';
import Loading from 'public/images/magic/loading.svg';
import { useCallback, useState } from 'react';

const ShowUI = () => {
  const { magic } = useMagicContext();
  const [disabled, setDisabled] = useState(false);
  const [showUIError, setShowUIError] = useState(false);

  const showUI = useCallback(async () => {
    if (!magic) return;
    try {
      setShowUIError(false);
      const { walletType } = await magic.wallet.getInfo();
      if (walletType !== 'magic') {
        return setShowUIError(true);
      }
      setDisabled(true);
      await magic.wallet.showUI();
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic]);

  return (
    <div className="wallet-method-container">
      <button className="wallet-method" onClick={showUI} disabled={disabled}>
        {disabled ? (
          <div className="loading-container min-w-[76px]">
            <Image className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          'showUI()'
        )}
      </button>
      <div className="wallet-method-desc">
        Opens wallet view to manage assets, purchase/send/receive crypto, and
        access recovery phrase.
      </div>
      {showUIError ? (
        <div className="mb-[-10px]">
          <Spacer size={20} />
          <ErrorText>Method not supported for third party wallets.</ErrorText>
        </div>
      ) : null}
    </div>
  );
};

export default ShowUI;
