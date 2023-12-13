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
    name: 'Andy',
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
  users: User[];
}

const boards: Board[] = [
  { id: 1, image: '/artwork/Card1.png', users: users1 },
  { id: 2, image: '/artwork/Card2.png', users: users2 },
  { id: 3, image: '/artwork/Card3.png', users: users1 },
  { id: 4, image: '/artwork/Card4.png', users: users2 },
];

const Tab1Content: React.FC = () => (
  <>
    <div className="mb-3 text-lg font-bold">Competitions</div>

    <div>
      {boards.map((board) => (
        <div key={board.id} className="flex">
          <div className="flex-item pr-3 pt-1">
            <Image src={board.image} alt="1" className="h-44 w-36" />
          </div>
          <div className="">
            <div className="mb-1 text-sm font-bold">Leaderboard</div>
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
