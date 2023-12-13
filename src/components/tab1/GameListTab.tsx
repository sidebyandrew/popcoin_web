import GameList from '@/components/tab1/GameList';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
const users = [
  {
    id: 1,
    name: 'John Doe',
    introduction: 'Web Developer',
    imageUrl: 'https://example.com/john-doe.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    introduction: 'UX Designer',
    imageUrl: 'https://example.com/jane-smith.jpg',
  },
  // Add more users as needed
];

export default function GameListTab() {
  return (
    <div className="flex w-full flex-col">
      <Tabs variant={'underlined'} aria-label="Options">
        <Tab key="challenges" title="Challenges">
          <div>
            <GameList games={users} />
          </div>
        </Tab>
        <Tab key="battles" title="PvP Battles">
          <Card radius={'none'}>
            <CardBody>PvP Battles</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
