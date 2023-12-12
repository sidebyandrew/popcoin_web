// Tab1Content.tsx
import GameListTab from '@/components/GameListTab';
import SliderImage from '@/components/SliderImage';
import UserProfile from '@/components/user/UserProfile';
import React from 'react';

const Tab1Content: React.FC = () => (
  <div>
    <UserProfile />
    <SliderImage />
    <GameListTab />
  </div>
);

export default Tab1Content;
