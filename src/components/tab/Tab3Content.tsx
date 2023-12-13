// Tab1Content.tsx
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';
import React from 'react';

interface Task {
  id: number;
  introduction: string;
  steps?: string;
  imageUrl: string;
  points: number;
}

const tasks: Task[] = [
  {
    id: 1,
    introduction: 'Participate in 10 challenges',
    steps: '1/10',
    imageUrl: '/icon/Earn Points 1@3x.png',
    points: 1000,
  },

  {
    id: 2,
    introduction: 'Participate in 10 PvP battles',
    steps: '1/10',
    imageUrl: '/icon/Earn Points 2@3x.png',
    points: 1000,
  },

  {
    id: 3,
    introduction: 'Join our Discord server',
    imageUrl: '/icon/Earn Points 3@3x.png',
    points: 3000,
  },

  {
    id: 4,
    introduction: 'Follow us on X (Twitter)',
    imageUrl: '/icon/Earn Points 4@3x.png',
    points: 5000,
  },

  {
    id: 5,
    introduction: 'Join our channel',
    imageUrl: '/icon/Earn Points 5@3x.png',
    points: 5000,
  },
];
const Tab1Content: React.FC = () => (
  <>
    <Card className="max-w-[400px]">
      <CardHeader className="gap-3">
        <div className="flex items-center  justify-between">
          <div className="text-md flex items-center  text-left font-bold">
            <div>Popcoin Points</div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex gap-2">
          <div>
            <Image
              alt="popcoin logo"
              radius="sm"
              src="/icon/popcoin@3x.png"
              height={40}
              width={40}
            />
          </div>
          <div className="text-4xl font-bold">50,256</div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Strive to earn points, and you will enjoy the airdrop benefits of
          Popcoin in the future!
        </p>
      </CardFooter>
    </Card>
    <div className="mb-3 mt-2 text-2xl font-bold">Earn Points</div>

    {tasks.map((task) => (
      <div key={task.id} className="m-1 flex justify-between  p-1">
        <div className="flex-item pr-3 pt-1">
          <Image
            src={task.imageUrl}
            height={40}
            width={40}
            alt={task.introduction}
          />
        </div>

        <div className="flex-item flex flex-col">
          <div className="whitespace-nowrap text-sm font-bold">
            {task.introduction}
            {/*<p className="text-sm text-gray-500 ">{task?.steps}</p>*/}
          </div>
          <div className="flex text-sm text-gray-500 ">
            <Image src="/icon/pop.png" height={16} width={16} alt="pop" />
            <div className="ml-1">+{task.points} Points</div>
          </div>
        </div>
        <div className="flex-item ml-auto">
          <Button size="sm" color="default" className="font-bold  ">
            Go
          </Button>
        </div>
      </div>
    ))}
  </>
);

export default Tab1Content;
