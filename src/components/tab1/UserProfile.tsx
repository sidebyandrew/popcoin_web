import { ThemeSwitch } from '@/components/theme-switch';
import { Avatar, Image } from '@nextui-org/react';
import { useInitData } from '@tma.js/sdk-react';

const UserProfile = () => {
  // todo
  // todo
  // todo
  // todo
  const initData = useInitData();
  // const initData = { user: { firstName: 'Andy', lastName: 'Block' } };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex-item pr-3 pt-1">
          <Avatar
            size={'lg'}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-lg font-bold">
            {initData?.user?.firstName}&nbsp;
            {initData?.user?.lastName}
            {initData?.user == null && 'Andrew Ton'}
          </div>
          <div className="flex text-sm text-gray-500">
            <Image src="/icon/pop.png" height={21} width={21} alt="pop" />
            <p className="ml-1 mr-4 font-bold">1,235</p>
            <Image
              src="/icon/toncoin@3x.png"
              height={21}
              width={21}
              alt="ton"
            />
            <p className=" mx-1 font-bold">1,000</p>
            <Image src="/icon/add@3x.png" height={18} width={18} alt="add" />
          </div>
        </div>
        <div className="flex-item ml-auto">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
