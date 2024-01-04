'use client';
import { ThemeSwitch } from '@/components/theme-switch';
import { global_challenges } from '@/config/popcoin-data';

import { bot_token } from '@/config/bot-config';
import useBackButtonEasy from '@/hooks/useBackButtonEasy';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useInitData, useMiniApp } from '@tma.js/sdk-react';
import { Bot } from 'grammy';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const router = useRouter();
  let game = global_challenges.find((game) => game.id == params.slug);
  if (!game) game = global_challenges[1];

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
      'meta_winner',
      'jaws',
      'popstar',
      'amaze',
      'chess',
    ]);

    if (!shortName || !tempSafeGameSet.has(shortName)) {
      const arrayFromSet = Array.from(tempSafeGameSet);
      const randomIndex = Math.floor(Math.random() * arrayFromSet.length);
      shortName = arrayFromSet[randomIndex];
    }

    const bot = new Bot(bot_token);
    if (tgInitData?.user?.id) {
      bot.api
        .sendGame(tgInitData?.user?.id, shortName || 'meta_winner')
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
    toast.success('Battle Created.', {
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
        className="mt-10 bg-black px-20 font-bold text-white dark:bg-gray-800"
        onClick={(shortName) => {
          clickSoloBtn(game?.shortName);
        }}
      >
        &nbsp;Start Matching&nbsp;
      </Button>
      <Button
        size="lg"
        radius="full"
        color="warning"
        className="mt-4 bg-[#FC5A05] px-20 font-bold text-white"
        onPress={onOpen}
        // as={Link}
        // href="https://t.me/ThePopcoinBot?game=shoot_hoops"
      >
        Play with Friends
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Card className="max-w-[400px]">
                  <CardHeader className="gap-3">
                    <div className="flex items-center justify-between">
                      <div className="text-md flex items-center  text-left font-bold">
                        <div>Balance</div>
                      </div>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="flex items-center gap-2 ">
                      <Image
                        alt="popcoin logo"
                        radius="sm"
                        src="/icon/toncoin@3x.png"
                        height={40}
                        width={40}
                      />
                      <div className="text-2xl font-bold">1,256</div>
                      <div className="text-gray-600 dark:text-gray-500">
                        Toncoin
                      </div>

                      <Button
                        size="sm"
                        radius="sm"
                        color="warning"
                        className="ml-auto bg-[#FC5A05] px-2 font-bold text-white"
                        onPress={() => {
                          onClose();
                          router.push('/tonwallet');
                        }}
                      >
                        Deposit
                      </Button>
                    </div>
                  </CardBody>
                  <Divider />
                </Card>

                <div className="mt-3 flex flex-col text-small">
                  <div className="text-lg font-bold">Rules:</div>
                  <div>1. Place a bet to enter the battle.</div>
                  <div>2. Compete against other players who have also bet.</div>
                  <div>3. Win the battle to claim 90% of the total bets.</div>
                </div>

                <div className="mt-4 flex flex-col items-center gap-2">
                  <div className="text-md flex flex-row items-center justify-center gap-1 font-bold text-gray-600 dark:text-gray-300">
                    Bet Amount:
                    <Image
                      src="/icon/toncoin@3x.png"
                      height={21}
                      width={21}
                      alt="ton"
                    />
                    <p>x 5 </p>
                  </div>
                  <Button
                    size="lg"
                    radius="full"
                    color="warning"
                    className="mt-1 bg-[#FC5A05] px-20 font-bold text-white"
                    onPress={() => {
                      onClose();
                      notify();
                    }}
                  >
                    Bet and Start
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <ThemeSwitch />
              </ModalFooter>
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
