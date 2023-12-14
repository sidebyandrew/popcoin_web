import { ThemeSwitch } from '@/components/theme-switch';
import { Avatar, Image } from '@nextui-org/react';

const UserProfile = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex-item pr-3 pt-1">
          <Avatar
            size={'lg'}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>

        {/*  flex: 将元素设置为 Flex 容器。
           flex-row: 设置 Flex 容器的主轴方向为行（水平）。
           flex-col: 设置 Flex 容器的主轴方向为列（垂直）。
      */}

        <div className="flex flex-col">
          <div className="text-lg font-bold">Andrew Tonx</div>
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
