'use client';
import BadgeInfo from '@/components/icon/badgeInfo';
import BadgeVerified from '@/components/icon/badgeVerified';
import IconCalendar from '@/components/icon/calendar';
import IconMap from '@/components/icon/map';
import { conferencesList } from '@/utils/data';
import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

export default function EpicConferences() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {conferencesList.map((conference, index) => (
        <Card
          shadow="lg"
          radius="sm"
          key={index}
          isPressable
          onPress={() => window.open(conference.origin, '_blank')}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              alt={conference.title}
              className="object-fit mb- h-64 w-full hover:object-contain"
              src={conference.cover}
            />
            <div>
              <p className="m-2 line-clamp-2 text-xl">{conference.title}</p>
              <p className="mx-2 mt-2 flex flex-row text-xs font-medium tracking-widest text-blue-400">
                <IconMap addClass=" text-blue-800 dark:text-blue-400 mr-1 " />
                {conference.venue}
              </p>
              <p className="mx-2 mt-2 flex flex-row text-base leading-relaxed text-gray-400 dark:text-gray-500 ">
                <IconCalendar addClass=" text-gray-400 dark:text-gray-500 mt-1 " />
                {conference.start_time} - {conference.end_time}
              </p>
            </div>
            <Divider />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <div className="flex flex-row">
              <div className="flex  flex-row" id="this is 1/2 host info">
                {conference.host[0].logo && (
                  <div>
                    <Image
                      className="m-1 h-6 w-6 rounded-full"
                      src={conference.host[0].logo}
                      alt="logo"
                      width={36}
                      height={36}
                    />
                  </div>
                )}

                <div className="g-5 title-font ml-1 mt-2 h-6 text-justify text-xs font-medium tracking-widest text-gray-400">
                  {conference.host[0].name}
                </div>

                {conference.host[0].verified && <BadgeVerified />}
                {!conference.host[0].verified && <BadgeInfo />}
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
