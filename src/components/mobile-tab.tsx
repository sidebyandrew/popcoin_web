// MobileTab.tsx
import {
  IconDefinition,
  faCog,
  faHome,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 p-4">
      <div className="flex items-center justify-center space-x-4">
        <button
          className={`${
            activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-700'
          } rounded px-4 py-2 font-bold text-white hover:bg-blue-700`}
          onClick={() => handleTabClick('tab1')}
        >
          <FontAwesomeIcon
            icon={getIconForTab('tab1')}
            className={
              activeTab === 'tab1' ? 'text-green-500' : 'text-yellow-500'
            }
          />
        </button>
        <button
          className={`${
            activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-700'
          } rounded px-4 py-2 font-bold text-white hover:bg-blue-700`}
          onClick={() => handleTabClick('tab2')}
        >
          <FontAwesomeIcon
            icon={getIconForTab('tab2')}
            className={
              activeTab === 'tab2' ? 'text-green-500' : 'text-yellow-500'
            }
          />
        </button>
        <button
          className={`${
            activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-700'
          } rounded px-4 py-2 font-bold text-white hover:bg-blue-700`}
          onClick={() => handleTabClick('tab3')}
        >
          <FontAwesomeIcon
            icon={getIconForTab('tab3')}
            className={
              activeTab === 'tab3' ? 'text-green-500' : 'text-yellow-500'
            }
          />
        </button>
      </div>
    </div>
  );
};

export default MobileTab;
