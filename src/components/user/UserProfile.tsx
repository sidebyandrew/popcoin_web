import { Avatar } from '@nextui-org/react';

const UserProfile = () => {
  return (
    <div className="flex items-center">
      {/* Left side with avatar */}
      <div className="p-4">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>

      {/* Right side with username and time */}
      <div className="flex flex-col">
        <div className="text-lg font-bold">Andrew Tonx</div>
        <div className="text-sm text-gray-500">12:34 PM</div>
      </div>
    </div>
  );
};

export default UserProfile;
