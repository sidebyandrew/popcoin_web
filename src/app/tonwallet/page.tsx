'use client';
import useBackButtonEasy from '@/hooks/useBackButtonEasy';
import { Avatar, Image } from '@nextui-org/react';
import { useInitData } from '@tma.js/sdk-react';
import { SendTransactionRequest, TonConnectButton } from '@tonconnect/ui-react';
import { useRouter } from 'next/navigation';

// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.
const defaultTx: SendTransactionRequest = {
  // The transaction is valid for 10 minutes from now, in unix epoch seconds.
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      // The receiver's address.
      address:
        '0:8a5a9c7b70d329be670de4e6cce652d464765114aa98038c66c3d8ceaf2d19b0',
      // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
      amount: '5000000',
      // (optional) State initialization in boc base64 format.
      stateInit:
        'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
      // (optional) Payload in boc base64 format.
      payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
    },

    // Uncomment the following message to send two messages in one transaction.
    /*
    {
      // Note: Funds sent to this address will not be returned back to the sender.
      address: '0:2ecf5e47d591eb67fa6c56b02b6bb1de6a530855e16ad3082eaa59859e8d5fdc',
      amount: toNano('0.01').toString(),
    }
    */
  ],
};

export default async function Page() {
  let router = useRouter();
  /* todo remove tma */
  // ==============================================================
  useBackButtonEasy();
  const initData = useInitData();
  // const initData = { user: { firstName: 'Andy', lastName: 'Block' } };
  // ==============================================================

  // const [tx, setTx] = useState(defaultTx);
  // const wallet = useTonWallet();
  // const [tonConnectUi] = useTonConnectUI();

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex-item pr-3 pt-1">
          <Avatar
            size={'lg'}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-lg font-bold">
            {initData?.user?.firstName}&nbsp;
            {initData?.user?.lastName}
            {initData?.user == null && 'Andrew Ton'}
          </div>
          <div className="flex text-sm text-gray-500">
            <Image
              src="/icon/toncoin@3x.png"
              height={21}
              width={21}
              alt="ton"
            />
            <p className=" mx-1 font-bold">1,000</p>
          </div>
        </div>
        <div className="flex-item ml-auto">
          <TonConnectButton />
        </div>
      </div>
      {/*<div className="flex items-center justify-center">*/}
      {/*  {wallet ? (*/}
      {/*    <Button*/}
      {/*      size="lg"*/}
      {/*      color="default"*/}
      {/*      radius="full"*/}
      {/*      className="mt-10 bg-black font-bold text-white dark:bg-gray-800 "*/}
      {/*      onClick={() => tonConnectUi.sendTransaction(tx)}*/}
      {/*    >*/}
      {/*      Deposit Toncoin*/}
      {/*    </Button>*/}
      {/*  ) : (*/}
      {/*    <Button*/}
      {/*      size="lg"*/}
      {/*      color="default"*/}
      {/*      radius="full"*/}
      {/*      className="mt-10 bg-black font-bold text-white dark:bg-gray-800"*/}
      {/*      onClick={() => tonConnectUi.openModal()}*/}
      {/*    >*/}
      {/*      Connect Wallet*/}
      {/*    </Button>*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
}
