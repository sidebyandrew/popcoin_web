'use client';

import { Button, Link } from '@nextui-org/react';
import { ArrowRightIcon } from '@nextui-org/shared-icons';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

import { FloatingComponents } from './floating-components';

import { TwitterIcon } from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import { trackEvent } from '@/utils/va';

const BgLooper = dynamic(
  () => import('./bg-looper').then((mod) => mod.BgLooper),
  {
    ssr: false,
  }
);

export const HomeHero = () => {
  return (
    <section className="relative flex h-[calc(100vh_-_64px)] w-full flex-nowrap items-center justify-between overflow-hidden  2xl:h-[calc(84vh_-_64px)]">
      <div className="relative z-20 flex w-full flex-col gap-6 lg:w-1/2 xl:mt-2">
        <div className="text-center leading-8 md:text-left md:leading-10">
          <div className="inline-block">
            <h1 className={title({ color: 'violet' })}>
              Social&nbsp;Events&nbsp;
            </h1>
          </div>
          <h1 className={title()}>With Pleasure.</h1>
        </div>
        <h2
          className={subtitle({
            fullWidth: true,
            class: 'text-center md:text-left',
          })}
        >
          Epic conferences, side events, local meetups, webinars, venues rating,
          hotel sharing ...
        </h2>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button
            as={NextLink}
            className="w-full md:w-auto"
            color="primary"
            endContent={
              <ArrowRightIcon
                className="outline-none transition-transform group-data-[hover=true]:translate-x-0.5"
                strokeWidth={2}
              />
            }
            href="/conferences"
            radius="full"
            size="lg"
            onPress={() => {
              trackEvent('Hero - Get Started', {
                name: 'Get Started',
                action: 'click',
                category: 'landing-page',
                data: '/conferences',
              });
            }}
          >
            Explore
          </Button>

          <Button
            fullWidth
            isExternal
            as={Link}
            className="w-full md:w-auto"
            href="https://x.com/deban_xyz"
            radius="full"
            size="lg"
            startContent={<TwitterIcon />}
            variant="bordered"
            onPress={() => {
              trackEvent('Hero - Github', {
                name: 'Github',
                action: 'click',
                category: 'landing-page',
                data: 'https://x.com/deban_xyz',
              });
            }}
          >
            Follow X
          </Button>
        </div>
      </div>

      <FloatingComponents />
      <BgLooper />
    </section>
  );
};
