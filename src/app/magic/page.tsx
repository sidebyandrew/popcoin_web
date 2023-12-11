'use client';

import { title } from '@/components/primitives';
import { useState } from 'react';

export default function EventPage() {
  // for magic login
  const [account] = useState<string | null>(null);

  return (
    <div>
      <h1 className={title({ size: 'sm' })}>Events {account}</h1>
    </div>
  );
}
