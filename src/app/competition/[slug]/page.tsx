'use client';

import { boards } from '@/config/popcoin-data';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Com({ params }: { params: { slug: number } }) {
  let router = useRouter();
  let board = boards.find((board) => {
    return board.id == params.slug;
  });
  if (!board) return <></>;
  return (
    <div className="  flex min-h-screen flex-col">
      <div className="mt-2 flex">
        <div className="w-2/3 p-4">
          <div className="flex">
            <div>
              <img src={board.image} className="mb-2 h-16 w-16 rounded" />
            </div>
            <div className="ml-3 flex-col">
              <div className="font-bold">{board.title}</div>
              <div className="text-sm font-light">{board.count}</div>
              <div className="text-sm font-light">{board.date}</div>
            </div>
          </div>
        </div>

        <div className=" flex w-1/3 flex-col items-center justify-center justify-items-center">
          <div>
            <Image
              alt="popcoin logo"
              radius="sm"
              src="/icon/toncoin@3x.png"
              height={40}
              width={40}
            />
          </div>
          <div className="text-xl font-bold">20k</div>
          <div>
            <Button
              size="sm"
              radius="lg"
              color="warning"
              className="ml-auto bg-[#FC5A05] px-2 font-bold text-white"
            >
              Prize Pool
            </Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <Tabs
          variant={'underlined'}
          aria-label="Options"
          disabledKeys={['Leaderboard', 'Prizes']}
        >
          <Tab key="Rules" title="Rules">
            <div className="mx-4 text-sm ">
              <div>1. Use 5 $TON to purchase 5 trial chances.</div>
              <div>
                2. During the valid competition period, the highest score will
                be recorded.
              </div>
              <div>
                3. Top 10 players, ranked by their highest scores, will share
                80% of the prize pool at the end of the competition.
              </div>
              <div>
                4. Any unused trials will automatically expire after the
                competition ends.
              </div>
            </div>
          </Tab>
          <Tab key="Leaderboard" title="Leaderboard">
            <div>Leaderboard</div>
          </Tab>
          <Tab key="Prizes" title="Prizes">
            <div>Prizes</div>
          </Tab>
        </Tabs>
      </div>

      <div className="mb-2 mt-auto">
        <Card className="m-2 max-w-[400px]">
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
              <div className="text-gray-600 dark:text-gray-500">Toncoin</div>
              <Button
                size="sm"
                radius="sm"
                color="warning"
                className="ml-auto bg-[#FC5A05] px-2 font-bold text-white"
                onPress={() => {
                  router.push('/tonwallet');
                }}
              >
                Deposit
              </Button>
            </div>
          </CardBody>
          <Divider />
        </Card>

        <div className="flex justify-center">
          <Button
            size="lg"
            radius="full"
            color="warning"
            className="mt-4 bg-[#FC5A05] px-28 font-bold text-white"
            onPress={() => {
              router.push('/');
            }}
          >
            Join for 5 $TON
          </Button>
        </div>
      </div>
    </div>
  );
}
