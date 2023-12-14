'use client';
import { global_games } from '@/config/popcoin-data';
import { Link } from '@nextui-org/link';
import { Avatar, Button } from '@nextui-org/react';

export default function ConferenceId({ params }: { params: { slug: number } }) {
  let game = global_games.find((game) => game.id == params.slug);
  if (!game) game = global_games[1];

  function handleHome() {
    window.location.href = '/';
  }

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
        as={Link}
        href={'/newchallenge/' + game.id}
      >
        Play Solo
      </Button>
      <Button
        size="lg"
        radius="full"
        color="warning"
        className="mt-4 bg-orange-700  px-20 font-bold text-white"
        as={Link}
        href={'/newchallenge/' + game.id}
      >
        Create Challenge
      </Button>
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
