'use client';

import MobileTab from '@/components/mobile-tab';
import Tab1Content from '@/components/tab/Tab1Content';
import Tab2Content from '@/components/tab/Tab2Content';
import Tab3Content from '@/components/tab/Tab3Content';

import { useBackButton } from '@tma.js/sdk-react';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const backButton = useBackButton();

  useEffect(() => {
    backButton.hide();
  }, []);

  return (
    <div>
      {/* Your main content goes here */}
      <div className="p-4">
        {/* Render different content based on the activeTab state */}
        {activeTab === 'tab1' && <Tab1Content />}
        {activeTab === 'tab2' && <Tab2Content />}
        {activeTab === 'tab3' && <Tab3Content />}
      </div>

      {/* Render the MobileTab component */}
      <MobileTab onTabChange={handleTabChange} />
    </div>
  );
};

export default App;
