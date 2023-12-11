'use client';

import { Tab, Tabs } from '@nextui-org/react';

export const FloatingTabs: React.FC<{}> = () => {
  return (
    <Tabs
      aria-label="Floating tabs example"
      className=""
      classNames={{
        base: 'absolute left-[100px] -top-[160px] h-10 animate-[levitate_17s_ease_infinite_1s]',
        tabList: 'max-w-[5000px] shadow-sm',
      }}
      radius="full"
      size="sm"
    >
      <Tab key="notes" title="Conferences" />
      <Tab key="events" title="Side Events" />
      <Tab key="panels" title="Panels" />
      <Tab key="hanckathon" title="Hackathons" />
      <Tab key="more" title="..." />
    </Tabs>
  );
};
