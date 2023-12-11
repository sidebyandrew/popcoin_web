import { useMagicContext } from '@/components/magic/MagicProvider';
import CardHeader from '@/components/magic/ui/CardHeader';
import FormButton from '@/components/magic/ui/FormButton';
import FormInput from '@/components/magic/ui/FormInput';
import TransactionHistory from '@/components/magic/ui/TransactionHistory';
import Card from '@/components/magic/ui/card';
import Divider from '@/components/magic/ui/divider';
import ErrorText from '@/components/magic/ui/error';
import Spacer from '@/components/magic/ui/spacer';
import { getFaucetUrl, getNetworkToken } from '@/utils/networks';
import Image from 'next/image';
import Link from 'public/images/magic/link.svg';
import { useCallback, useEffect, useState } from 'react';

const SendTransaction = () => {
  const { web3 } = useMagicContext();
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [disabled, setDisabled] = useState(!toAddress || !amount);
  const [hash, setHash] = useState('');
  const [toAddressError, setToAddressError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const publicAddress = localStorage.getItem('user');
  const network = localStorage.getItem('network');
  const tokenSymbol = getNetworkToken();

  useEffect(() => {
    setDisabled(!toAddress || !amount);
    setAmountError(false);
    setToAddressError(false);
  }, [amount, toAddress]);

  const sendTransaction = useCallback(() => {
    if (!web3?.utils.isAddress(toAddress)) {
      return setToAddressError(true);
    }
    if (isNaN(Number(amount))) {
      return setAmountError(true);
    }
    setDisabled(true);
    const txnParams = {
      from: publicAddress,
      to: toAddress,
      value: web3.utils.toWei(amount, 'ether'),
      gas: 21000,
    };
    web3.eth
      .sendTransaction(txnParams as any)
      .on('transactionHash', (txHash) => {
        setHash(txHash);
        console.log('Transaction hash:', txHash);
      })
      .then((receipt) => {
        setToAddress('');
        setAmount('');
        console.log('Transaction receipt:', receipt);
      })
      .catch((error) => {
        console.error(error);
        setDisabled(false);
      });
  }, [web3, amount, publicAddress, toAddress]);

  return (
    <Card>
      <CardHeader id="send-transaction">Send Transaction</CardHeader>
      <a href={getFaucetUrl()} target="_blank" rel="noreferrer">
        <FormButton onClick={() => null} disabled={false}>
          Get Test {tokenSymbol}{' '}
          <Image src={Link} alt="link-icon" className="ml-[3px]" />
        </FormButton>
      </a>
      <Divider />
      <FormInput
        value={toAddress}
        onChange={(e: any) => setToAddress(e.target.value)}
        placeholder="Receiving Address"
      />
      {toAddressError ? <ErrorText>Invalid address</ErrorText> : null}
      <FormInput
        value={amount}
        onChange={(e: any) => setAmount(e.target.value)}
        placeholder={`Amount (${tokenSymbol})`}
      />
      {amountError ? (
        <ErrorText className="error">Invalid amount</ErrorText>
      ) : null}
      <FormButton
        onClick={sendTransaction}
        disabled={!toAddress || !amount || disabled}
      >
        Send Transaction
      </FormButton>

      {hash ? (
        <>
          <Spacer size={20} />
          <TransactionHistory />
        </>
      ) : null}
    </Card>
  );
};

export default SendTransaction;
