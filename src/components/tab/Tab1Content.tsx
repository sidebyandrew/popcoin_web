// Tab1Content.tsx
import SliderImage from '@/components/SliderImage';
import UserProfile from '@/components/user/UserProfile';
import React from 'react';

const Tab1Content: React.FC = () => (
  <div>
    <UserProfile />

    <SliderImage />
  </div>
);

export default Tab1Content;
