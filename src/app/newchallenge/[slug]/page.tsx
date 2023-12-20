'use client';
import { ThemeSwitch } from '@/components/theme-switch';
import { global_games } from '@/config/popcoin-data';
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

export default function ConferenceId({ params }: { params: { slug: number } }) {
  // ==============================================================
  /* todo remove tma */
  useBackButtonEasy();
  const tgInitData = useInitData();
  let miniApp = useMiniApp();
  // ------------------------------------------------------------
  // const tgInitData = { user: { id: 1 } };
  // let miniApp = { close: () => {} };
  // ==============================================================

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
    const bot = new Bot('6811958485:AAHg_96h1PMJIrvbwOM9j4Pcx8uaEVK48B4');
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

  return (
    <div className="flex h-screen flex-col items-center justify-center ">
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
                        className="ml-5 bg-[#FC5A05]  px-2 font-bold text-white"
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
                  <Button
                    size="lg"
                    radius="full"
                    color="warning"
                    className="mt-4 bg-[#FC5A05]  px-20 font-bold text-white"
                    onPress={onClose}
                  >
                    Create Challenge
                  </Button>
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
                    3. The player at the top of the leaderboard wins 90% ofthe
                    total bets.
                  </div>
                  <div>
                    4. Each player gets 5 tries in a challenge, and their rankon
                    the leaderboard depends on their best score.
                  </div>
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
