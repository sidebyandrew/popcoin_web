// Tab1Content.tsx
import { Avatar, Image } from '@nextui-org/react';
import React from 'react';

interface User {
  id: number;
  rank: number;
  img: string;
  name: string;
  score: string;
}
const users1: User[] = [
  {
    id: 1,
    rank: 1,
    img: '/avatar/Ellipse1.png',
    name: 'Gloria',
    score: '15,233',
  },
  {
    id: 2,
    rank: 2,
    img: '/avatar/Ellipse2.png',
    name: 'Ross',
    score: '11,000',
  },
  {
    id: 3,
    rank: 3,
    img: '/avatar/Ellipse3.png',
    name: 'Gabrielle',
    score: '10,233',
  },
  {
    id: 4,
    rank: 4,
    img: '/avatar/Ellipse4.png',
    name: 'Andrew',
    score: '9,000',
  },
  {
    id: 5,
    rank: 5,
    img: '/avatar/Ellipse5.png',
    name: 'Kitty',
    score: '8,123',
  },
];
const users2: User[] = [
  {
    id: 1,
    rank: 1,
    img: '/avatar/Ellipse6.png',
    name: 'Andy Liu',
    score: '15,233',
  },
  {
    id: 2,
    rank: 2,
    img: '/avatar/Ellipse7.png',
    name: 'Bruce',
    score: '11,000',
  },
  {
    id: 3,
    rank: 3,
    img: '/avatar/Ellipse8.png',
    name: 'Luck',
    score: '10,233',
  },
  {
    id: 4,
    rank: 4,
    img: '/avatar/Ellipse9.png',
    name: 'Judy',
    score: '9,000',
  },
  {
    id: 5,
    rank: 5,
    img: '/avatar/Ellipse10.png',
    name: 'Kitty',
    score: '8,123',
  },
];

interface Board {
  id: number;
  image: string;
  title: string;
  count: string;
  date: string;
  users: User[];
}

const boards: Board[] = [
  {
    id: 1,
    image: '/artwork/Card1.png',
    title: 'Color Balls',
    count: '800/1000',
    date: '04/12/23 -31/12/2023',
    users: users1,
  },
  {
    id: 2,
    image: '/artwork/Card2.png',
    title: 'Space Navigator',
    count: '800/1000',
    date: '04/12/23 - 31/12/2023',
    users: users2,
  },
  {
    id: 3,
    image: '/artwork/Card3.png',
    title: 'Chess',
    count: '800/1000',
    date: '04/01/24 - 31/01/2024',
    users: users1,
  },
  {
    id: 4,
    image: '/artwork/Card4.png',
    title: 'Popstar',
    count: '800/1000',
    date: '04/12 - 31/12/2023',
    users: users2,
  },
];

const Tab1Content: React.FC = () => (
  <>
    <div className="mb-3 text-2xl font-bold">Competitions</div>

    <div className="mb-20">
      {boards.map((board) => (
        <div key={board.id} className="flex pb-2">
          <div className="group relative">
            <img
              src={board.image}
              className="mb-2 h-44 w-36 rounded object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
              <p className="text-md font-bold">{board.title}</p>
              <p className="text-sm font-medium">{board.count}</p>
              <p className="text-xs">{board.date}</p>
            </div>
          </div>

          <div className=" ml-1 ">
            <div className="mb-1text-sm font-bold">Leaderboard</div>
            {board.users.map((user) => (
              <div
                key={user.id}
                className="mb-1 flex flex-nowrap items-start gap-1"
              >
                <div className="flex-item flex-nowrap">
                  <Image
                    src="/icon/cup.png"
                    alt="rank_orange"
                    className={`${user.rank < 4 ? '' : 'invisible'} h-5 w-5 `}
                  />
                </div>
                <div className="flex-item flex-nowrap">
                  <Avatar src={user.img} className="h-6 w-6 text-tiny" />
                </div>
                <div className="flex-item flex flex-grow flex-col">
                  <div className="text-sm">{user.name}</div>
                </div>
                <div className="flex-item flex flex-grow flex-col">
                  <div className="text-sm">&nbsp;</div>
                </div>
                <div className="flex-item flex flex-grow flex-col">
                  <div className="text-sm">&nbsp;</div>
                </div>
                <div className="flex-item">{user.score}</div>
              </div>
            ))}
            <div className="text-center text-sm underline">See all</div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Tab1Content;
