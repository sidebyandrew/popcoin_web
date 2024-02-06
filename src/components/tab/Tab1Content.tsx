import GameListTab from '@/components/tab1/GameListTab';
import SliderImage from '@/components/tab1/SliderImage';
import UserProfile from '@/components/tab1/UserProfile';
import React from 'react';

const Tab1Content: React.FC = () => (
  <div className="p-4">
    <UserProfile />
    <SliderImage />
    <GameListTab />
  </div>
);

export default Tab1Content;
