'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Hello Confs</h1>
      <Link href="/events">Events</Link>
    </>
  );
}
