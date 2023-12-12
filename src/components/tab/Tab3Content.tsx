// Tab1Content.tsx
import EpicConferences from '@/components/home/epic-conferences';
import { ThemeSwitch } from '@/components/theme-switch';
import React from 'react';

const Tab1Content: React.FC = () => (
  <div>
    <ThemeSwitch />
    <EpicConferences />
  </div>
);

export default Tab1Content;
