'use client';
import { ThemeSwitch } from '@/components/theme-switch';
import { Avatar, Image } from '@nextui-org/react';
import { useInitData } from '@tma.js/sdk-react';
import { useRouter } from 'next/navigation';

const UserProfile = () => {
  /* todo remove tma */
  // ==============================================================
  const initData = useInitData();
  // const initData = { user: { firstName: 'Andy', lastName: 'Block' } };
  // //==============================================================

  function clickAvatar(): void {
    console.info('clickAvatar');
  }

  let router = useRouter();
  return (
    <>
      <div className="flex justify-between">
        {/*<div className="flex-item pr-3 pt-1" onClick={clickAvatar}>*/}
        {/*  <Avatar*/}
        {/*    size={'lg'}*/}
        {/*    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"*/}
        {/*  />*/}
        {/*</div>*/}

        <div className="flex flex-col">
          <div className="text-lg font-bold">
            {initData?.user?.firstName}&nbsp;
            {initData?.user?.lastName}
            {initData?.user == null && 'Andrew Ton'}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Image src="/icon/pop.png" height={21} width={21} alt="pop" />
            <p className="ml-1 mr-4 font-bold">1,235</p>
            <ThemeSwitch />
          </div>
        </div>
        <div className="flex-item ml-auto">
          {/*<ThemeSwitch />*/}
          <TonConnectButton />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
