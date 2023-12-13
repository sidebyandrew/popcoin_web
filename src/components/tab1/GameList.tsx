import { Avatar, Button } from '@nextui-org/react';

interface Game {
  id: number;
  name: string;
  introduction: string;
  imageUrl: string;
}

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <>
      {games.map((game) => (
        <div key={game.id} className="flex justify-between p-1">
          <div className="flex-item pr-3 pt-1">
            <Avatar
              radius="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </div>

          <div className="flex-item flex flex-col">
            <div className="text-lg font-bold">Andrew Tonx</div>
            <div className="text-sm text-gray-500">12:34 PM</div>
          </div>
          <div className="flex-item ml-auto">
            <Button size="sm" color="warning" className="font-bold text-white">
              Play
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default GameList;
