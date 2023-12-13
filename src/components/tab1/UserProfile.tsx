import { ThemeSwitch } from '@/components/theme-switch';
import { Avatar } from '@nextui-org/react';

const UserProfile = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-item pr-3 pt-1">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>

      <div className="flex-item flex flex-col">
        <div className="text-lg font-bold">Andrew Tonx</div>
        <div className="text-sm text-gray-500">12:34 PM</div>
      </div>
      <div className="flex-item ml-auto">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default UserProfile;
