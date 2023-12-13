import GameList from '@/components/tab1/GameList';
import { Tab, Tabs } from '@nextui-org/react';
const users = [
  {
    id: 1,
    name: 'Jump3D',
    introduction: 'Jump down helix platforms to reach the end.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/3djump/h5/index.html',
    imageUrl: '/game/jump3d.png',
  },

  {
    id: 2,
    name: 'Fruit Archer',
    introduction: 'Hit any much fruit with arrows as you can.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/archer/h5/index.html',
    imageUrl: '/game/archer.png',
  },

  {
    id: 3,
    name: 'Shoot Hoops',
    introduction: 'Shoot the balls into the baskets.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/basketball/h5/index.html',
    imageUrl: '/game/shot.png',
  },

  {
    id: 4,
    name: 'Circle Glide',
    introduction: 'Dont let the circle touch the thread!',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/circle/circle/index.html',
    imageUrl: '/game/circle.png',
  },

  {
    id: 5,
    name: 'Color Balls',
    introduction: 'Match the colors of the ball and the wall.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/colorjump/color/index.html',
    imageUrl: '/game/colorjump.png',
  },

  {
    id: 6,
    name: 'Wordscapes',
    introduction: 'Connect letters to make words.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/crossword/web-mobile/index.html',
    imageUrl: '/game/weseewe.png',
  },

  {
    id: 7,
    name: 'Spaceships',
    introduction: 'Shoot the alien spaceships to defend yourself.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/huanxing/ring/index.html',
    imageUrl: '/game/defend.png',
  },

  {
    id: 8,
    name: 'Match It',
    introduction: 'Swap and match 5 shapes together.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/lineslines/lines/index.html',
    imageUrl: '/game/lines.png',
  },

  {
    id: 9,
    name: 'Number Blocks',
    introduction: 'Shoot for numbers, break the blocks.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/numberblock/h5/index.html',
    imageUrl: '/game/numberblock.png',
  },

  {
    id: 10,
    name: 'Alien Attack',
    introduction: 'Classic galaxy shooter game!',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/plane/war/index.html',
    imageUrl: '/game/plane.png',
  },

  {
    id: 11,
    name: 'Save the Monster',
    introduction: 'Keep the little monster from being crushed!',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/riseup/keeper/index.html',
    imageUrl: '/game/archer.png',
  },

  {
    id: 12,
    name: 'Rotate Bomb',
    introduction: 'Aim your bombs at the weak points!',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/rotatebomb/h5/index.html',
    imageUrl: '/game/rotate.png',
  },

  {
    id: 13,
    name: 'Block Hive',
    introduction: 'Drop blocks to create lines of blocks without gaps.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/sixxiaochu/h5/index.html',
    imageUrl: '/game/six！.png',
  },

  {
    id: 14,
    name: 'Make a Bridge',
    introduction: 'Make a bridge for the little monster.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/stick/%E6%A3%8D%E5%AD%90%E8%8B%B1%E9%9B%84/web/index.html',
    imageUrl: '/game/sticker.jpg',
  },

  {
    id: 15,
    name: 'Snake & Block',
    introduction: 'Guide a snake of balls to break the bricks.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/svb/h5/index.html',
    imageUrl: '/game/svb.png',
  },

  {
    id: 16,
    name: 'Tap Tap Dash',
    introduction: 'Tap to jump or switch directions.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/taptap/taptap/index.html',
    imageUrl: '/game/tap.png',
  },

  {
    id: 17,
    name: 'Monster Go',
    introduction: 'Dont land on the slippery slopes!',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/tuzi/h5/index.html',
    imageUrl: '/game/sticker.jpg',
  },

  {
    id: 18,
    name: 'Color Jump',
    introduction: 'Jump on the same color for more colors!',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/weseewe/h5/index.html',
    imageUrl: '/game/weseewe.png',
  },

  {
    id: 19,
    name: 'Space Navigator',
    introduction: 'Navigate your ship through the galaxy.',
    gameUrl:
      'https://h5game-1256660609.cos.ap-guangzhou.myqcloud.com/xingtu/xingtu/index.html',
    imageUrl: '/game/spacetravel.png',
  },
];

export default function GameListTab() {
  // let sort = users.sort(function () {
  //   return 0.5 - Math.random();
  // });
  return (
    <div className="flex w-full flex-col pb-20">
      <Tabs variant={'underlined'} aria-label="Options">
        <Tab key="challenges" title="Challenges">
          <div>
            <GameList games={users} />
          </div>
        </Tab>
        <Tab key="battles" title="PvP Battles">
          <div>
            <GameList games={users} />
          </div>
        </Tab>
      </Tabs>
      <div className="text-center text-gray-600">endless gaming...</div>
    </div>
  );
}
