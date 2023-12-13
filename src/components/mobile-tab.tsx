// MobileTab.tsx
import {
  IconDefinition,
  faCog,
  faHome,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Image } from '@nextui-org/react';
import React, { useState } from 'react';

interface MobileTabProps {
  onTabChange: (tab: string) => void;
}

const MobileTab: React.FC<MobileTabProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const getIconForTab = (tab: string): IconDefinition => {
    switch (tab) {
      case 'tab1':
        return faHome;
      case 'tab2':
        return faStar;
      case 'tab3':
        return faCog;
      default:
        return faHome; // Default to faHome if tab is not recognized
    }
  };

  return (
    <>
      <div className="bg-blur fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black">
        <div className="flex items-center justify-center space-x-4">
          <button
            className={`${
              activeTab === 'tab1' ? '' : ''
            } rounded px-4 py-2 font-bold `}
            onClick={() => handleTabClick('tab1')}
          >
            <Image
              width="64"
              height="64"
              alt="tab1"
              className=""
              src={
                activeTab === 'tab1'
                  ? '/icon/Home_selected@3x.png'
                  : '/icon/Home_unselected@3x.png'
              }
            />
          </button>
          <button
            className={`${
              activeTab === 'tab2' ? '' : ''
            } rounded px-4 py-2 font-bold `}
            onClick={() => handleTabClick('tab2')}
          >
            <Image
              width="64"
              height="64"
              alt="tab2"
              className=""
              src={
                activeTab === 'tab2'
                  ? '/icon/Competition_selected@3x.png'
                  : '/icon/Competition_unselected@3x.png'
              }
            />
          </button>
          <button
            className={`${
              activeTab === 'tab3' ? '' : ''
            } rounded px-4 py-2 font-bold`}
            onClick={() => handleTabClick('tab3')}
          >
            <Image
              width="64"
              height="64"
              alt="tab3"
              className=""
              src={
                activeTab === 'tab3'
                  ? '/icon/Account_selected@3x.png'
                  : '/icon/Account_unselected@3x.png'
              }
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileTab;
