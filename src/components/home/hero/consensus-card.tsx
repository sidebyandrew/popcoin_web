"use client";

import {useState, FC} from "react";
import {Card, CardHeader, Image,Button, Avatar, CardBody, CardFooter} from "@nextui-org/react";
import {clsx} from "@nextui-org/shared-utils";
import {Divider} from "@nextui-org/divider";

interface ConsensusCardProps {
  className?: string;
}

export const ConsensusCard: FC<ConsensusCardProps> = ({className}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className={clsx("max-w-[300px]", className)}>

      <CardBody className="px-0 py-0">
       <Image
                      shadow="sm"
                      radius="sm"
                      width="100%"
                      alt=""
                      className="object-cover h-32 w-full "
                      src="/images/con2023.jpeg"
                    />

              <Divider />
      </CardBody>
       <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-sm">508</p>
          <p className=" text-default-400 text-sm">Side Events</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-sm">97.1K</p>
          <p className="text-default-400 text-sm">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};
