'use client';
import { bot_token } from '@/config/bot-config';
import { global_games } from '@/config/popcoin-data';
import useBackButtonEasy from '@/hooks/useBackButtonEasy';
import {
  Avatar,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useInitData, useMiniApp } from '@tma.js/sdk-react';
import {
  CHAIN,
  SendTransactionRequest,
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react';
import { Bot } from 'grammy';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.
const defaultTx: SendTransactionRequest = {
  // The transaction is valid for 10 minutes from now, in unix epoch seconds.
  validUntil: Math.floor(Date.now() / 1000) + 600,
  network: CHAIN.MAINNET,

  messages: [
    {
      // The receiver's address.
      address:
        '0:4ea29e0017d44d8760c6d4dd7265fcc5336f2f64d52546302d8e984e11531dd2',
      // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
      amount: '5000000',
      // (optional) Payload in boc base64 format.
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

export default function ConferenceId({ params }: { params: { slug: number } }) {
  // ==============================================================
  /* todo remove tma */
  useBackButtonEasy();
  const tgInitData = useInitData();
  let miniApp = useMiniApp();
  // //------------------------------------------------------------
  // const tgInitData = { user: { id: 1 } };
  // let miniApp = { close: () => {} };
  // ==============================================================
  const [tx, setTx] = useState(defaultTx);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  const router = useRouter();
  let game = global_games.find((game) => game.id == params.slug);
  if (!game) game = global_games[1];

  function handleHome() {
    router.push('/');
  }
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSetValue = (val: number) => {
    setCount(val);
  };

  function clickSoloBtn(shortName: string | undefined) {
    const tempSafeGameSet: Set<string> = new Set([
      'jump_3d',
      'fruit_archer_challenge',
      'shoot_hoops',
    ]);

    if (!shortName || !tempSafeGameSet.has(shortName)) {
      const arrayFromSet = Array.from(tempSafeGameSet);
      const randomIndex = Math.floor(Math.random() * arrayFromSet.length);
      shortName = arrayFromSet[randomIndex];
    }

    const bot = new Bot(bot_token);
    if (tgInitData?.user?.id) {
      bot.api
        .sendGame(tgInitData?.user?.id, shortName || 'jump_3d')
        .then(() => {
          console.info('sendGame done.');
          miniApp.close();
        })
        .catch(() => {
          console.info('sendGame fail.');
        });
    } else {
      console.error('CAN NOT GET TG USER ID', JSON.stringify(tgInitData));
    }
  }
  const notify = () =>
    toast.info('Open TON wallet to connect.', {
      className: 'bg-gray-300 dark:bg-gray-900',
    });

  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <div>
        <ToastContainer />
      </div>
      <Avatar radius="sm" size={'lg'} src={game.imageUrl} />
      <div className="mt-2 text-2xl font-bold">{game.name}</div>
      <Button
        size="lg"
        color="default"
        radius="full"
        className="mt-10 bg-black px-28 font-bold text-white dark:bg-gray-800"
        onClick={(shortName) => {
          clickSoloBtn(game?.shortName);
        }}
      >
        Play Solo
      </Button>
      <Button
        size="lg"
        radius="full"
        color="warning"
        className="mt-4 bg-[#FC5A05]  px-20 font-bold text-white"
        onPress={onOpen}
      >
        Create Challenge
      </Button>

      <Modal size={'md'} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                {/* wallet */}
                <div className="m-auto">
                  {wallet ? <TonConnectButton /> : <></>}
                </div>

                <div className="mt-2 text-lg font-bold">Bet Amount</div>
                <div>
                  <div className="mb-2 flex items-center">
                    <Image
                      alt="popcoin logo"
                      radius="sm"
                      src="/icon/minus-square@3x.png"
                      height={40}
                      width={40}
                      onClick={handleDecrement}
                    />
                    <div className="mx-8"> {count} </div>
                    <Image
                      alt="popcoin logo"
                      radius="sm"
                      src="/icon/add-square@3x.png"
                      height={40}
                      width={40}
                      onClick={handleIncrement}
                    />
                  </div>
                  <div className="ml-2 flex items-center gap-5">
                    <div
                      className="cursor-pointer bg-gray-800 px-3 text-white dark:bg-gray-700"
                      onClick={() => handleSetValue(1)}
                    >
                      1
                    </div>
                    <div
                      className="cursor-pointer bg-gray-800 px-3 text-white dark:bg-gray-700"
                      onClick={() => handleSetValue(5)}
                    >
                      5
                    </div>
                    <div
                      className="cursor-pointer bg-gray-800 px-3 text-white dark:bg-gray-700"
                      onClick={() => handleSetValue(10)}
                    >
                      10
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  {wallet ? (
                    <Button
                      size="lg"
                      radius="full"
                      color="warning"
                      className="mt-4 bg-[#FC5A05]  px-20 font-bold text-white"
                      onPress={async () => {
                        let sendTransactionResponse =
                          tonConnectUi.sendTransaction(tx);

                        // onClose();
                        notify();
                      }}
                    >
                      Create Challenge
                    </Button>
                  ) : (
                    <TonConnectButton />
                  )}

                  <div className="underline">My Challenges</div>
                </div>

                <div className="mt-3 flex flex-col text-small">
                  <div className="text-lg font-bold">Rules:</div>
                  <div>1. Place a bet before creating a challenge.</div>
                  <div>
                    2. Challenges end automatically 48 hours after creation, and
                    winners are decided based on the leaderboard.
                  </div>
                  <div>
                    3. The player at the top of the leaderboard wins 90% of the
                    total bets.
                  </div>
                  <div>
                    4. Each player gets 5 tries in a challenge, and their rank
                    on the leaderboard depends on their best score.
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="mt-9 flex justify-between gap-5">
        <div
          onClick={handleHome}
          className="flex cursor-pointer flex-col items-center"
        >
          <Avatar
            color="default"
            className="bg-white dark:bg-black"
            radius="sm"
            size={'sm'}
            src="/icon/HomePlay.png"
          />
          <div>Home</div>
        </div>
        <div
          onClick={handleHome}
          className="flex cursor-pointer flex-col items-center"
        >
          <Avatar
            color="default"
            className="bg-white dark:bg-black"
            radius="sm"
            size={'sm'}
            src="/icon/cup@2x.png"
          />
          <div>Leaderboard</div>
        </div>
        <div
          onClick={handleHome}
          className="flex cursor-pointer flex-col items-center"
        >
          <Avatar
            color="default"
            className="bg-white dark:bg-black"
            radius="sm"
            size={'sm'}
            src="/icon/Share.png"
          />
          <div>Share</div>
        </div>
      </div>
    </div>
  );
}
