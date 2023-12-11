'use client';

import EpicConferences from '@/components/home/epic-conferences';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs size="lg" radius="sm" aria-label="Options">
        <Tab key="all" title="All">
          <EpicConferences />
        </Tab>
        <Tab key="summit" title="Summit">
          <EpicConferences />
        </Tab>
        <Tab key="collection" title="Collection">
          <EpicConferences />
        </Tab>
        <Tab key="hackathon" title="Hackathon">
          <Card>
            <CardBody>hackathon</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
