import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Input,
  Tooltip,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import NextImage from 'next/image';

import { FloatingTabs } from './floating-tabs';

import { ConsensusCard } from '@/components/home/hero/consensus-card';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useMediaQuery } from '@/hooks/use-media-query';

export const FloatingComponents: React.FC<{}> = () => {
  const { theme, setTheme } = useTheme();

  const isMounted = useIsMounted();
  const isSelected = theme === 'dark' && isMounted;

  const isTablet = useMediaQuery(1024);

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className="relative z-20 hidden w-1/2 flex-col lg:flex bg-red-500">
      <>


        <div className="absolute -top-[260px] right-[100px] z-0 h-[90px] max-w-fit animate-[levitate_12s_ease_infinite_1s]">
          <Image
            alt="Professional camera"
            as={NextImage}
            className="h-[100%] object-cover"
            height={1}
            src="/images/web3festval_trans.png"
            width={160}
          />
        </div>

        <FloatingTabs />

        <ConsensusCard className="absolute -top-[80px] left-[80px] animate-[levitate_16s_ease_infinite] border-none" />

        <Card className="z-1 absolute -top-[68px] right-[1px] max-w-fit animate-[levitate_18s_ease_infinite] border-none p-0">
          <CardBody className="p-0">
            <Image
              alt=""
              as={NextImage}
              className="object-cover"
              height={300}
              src="/images/web3london.webp"
              width={260}
            />
          </CardBody>
        </Card>

        {isMounted && (
          <Tooltip
            className="animate-[levitate_14s_ease_infinite] text-sm"
            color="secondary"
            content="AIGC"
            isOpen={!isTablet}
            placement="top"
            style={{
              zIndex: 39,
            }}
          >
            <Button
              className="absolute left-[160px] top-[160px] max-w-fit animate-[levitate_14s_ease_infinite_0.5s]"
              color="secondary"
              size="sm"
              variant="flat"
            >
              AI Generated Cover Image
            </Button>
          </Tooltip>
        )}
        <Input
            className="absolute left-[130px] top-[250px] w-[200px] animate-[levitate_10s_ease_infinite]"
            color="secondary"
            defaultValue=""
            label="Create Your Event"
            labelPlacement="outside"
            variant="bordered"
            onClear={() => {}}
        />

        <Card
          isFooterBlurred
          className="absolute right-[60px] top-[100px] z-0 max-w-fit animate-[levitate_12s_ease_infinite_1s]"
        >
          <Image
            alt="token2049"
            as={NextImage}
            className="object-cover"
            height={200}
            src="/images/token2049.webp"
            width={200}
          />
          <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80"></p>
            <Button
              className="bg-black/20 text-tiny text-white"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
      </>
    </div>
  );
};
