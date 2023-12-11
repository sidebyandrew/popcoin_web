'use client';

import { Community } from '@/components/home/community';
import EpicConferences from '@/components/home/epic-conferences';
import { HomeHero } from '@/components/home/hero';
import { subtitle, title, titleWrapper } from '@/components/primitives';
import { Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <div className={titleWrapper({ class: 'mt-28 items-center' })}>
        <div className="inline-flex items-center">
          <h1 className={title({ size: 'lg' })}>Epic Conferences</h1>
          &nbsp;&nbsp;
        </div>
      </div>
      <p
        className={subtitle({
          class: 'flex items-center justify-center text-center md:w-full',
        })}
      >
        Get involved in upcoming summit/conference.
      </p>
      <Spacer y={12} />
      <EpicConferences />
      <Spacer y={12} />
      <Community />
      <Spacer y={12} />
    </section>
  );
}
