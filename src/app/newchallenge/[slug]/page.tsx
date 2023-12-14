'use client';
import { ThemeSwitch } from '@/components/theme-switch';
import { global_games } from '@/config/popcoin-data';
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
import { useState } from 'react';

export default function ConferenceId({ params }: { params: { slug: number } }) {
  let game = global_games.find((game) => game.id == params.slug);
  if (!game) game = global_games[1];

  function handleHome() {
    window.location.href = '/';
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

  return (
    // flex 默认是 x 轴为主轴
    // -  flex-col 类将 Flex 容器的主轴方向设置为列（垂直） , 即元素按照 y 轴排序
    //   -- justify-center 主轴居中  [计] 段落重排, 两端对齐  ===> 在一条轴内，公正就是两端对齐
    //   -- items-center 是所有items的设置，将所有 items 居中对齐
    <div className="flex h-screen flex-col items-center justify-center ">
      <Avatar radius="sm" size={'lg'} src={game.imageUrl} />
      <div className="mt-2 text-2xl font-bold">{game.name}</div>
      <Button
        size="lg"
        color="default"
        radius="full"
        className="mt-10 bg-black px-28 font-bold text-white dark:bg-gray-900"
        onPress={onOpen}
      >
        Play Solo
      </Button>
      <Button
        size="lg"
        radius="full"
        color="warning"
        className="mt-4 bg-orange-700  px-20 font-bold text-white"
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
                        className="ml-5 bg-orange-700  px-2 font-bold text-white"
                        onPress={onOpen}
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
                    className="mt-4 bg-orange-700  px-20 font-bold text-white"
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
