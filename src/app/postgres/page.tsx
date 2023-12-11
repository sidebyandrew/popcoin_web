import ExpandingArrow from '@/components/postgres/expanding-arrow';
import { Table } from '@/components/postgres/table';
import TablePlaceholder from '@/components/postgres/table-placeholder';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

// export const runtime = 'edge';
// export const preferredRegion = 'home';
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
// auto :（默认）：默认选项，在不阻止任何组件选择动态行为的情况下尽可能多地缓存。
// force-dynamic: 通过禁用 fetch 请求的所有缓存并始终重新验证，强制动态渲染和获取布局或页面的未缓存数据。该选项相当于：
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Link
        href="https://vercel.com/templates/next.js/postgres-starter"
        className="group mt-20 flex space-x-1 rounded-full bg-white/30 px-10 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-lg active:shadow-sm sm:mt-0"
      >
        <div>Deploy your own to Vercel</div>
        <ExpandingArrow />
      </Link>
      <h1 className="bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text pb-8 pt-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Postgres on Vercel
      </h1>
      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>
      <p className="mt-6 w-full max-w-lg text-center font-light text-gray-600">
        <Link
          href="https://vercel.com/postgres"
          className="font-medium underline underline-offset-4 transition-colors hover:text-black"
        >
          Vercel Postgres
        </Link>{' '}
        demo. <br /> Built with{' '}
        <Link
          href="https://nextjs.org/docs"
          className="font-medium underline underline-offset-4 transition-colors hover:text-black"
        >
          Next.js App Router
        </Link>
        .
      </p>

      <div className="mt-10 flex w-full max-w-xl justify-center space-x-5 border-t border-gray-300 pt-10 text-gray-600">
        <Link
          href="https://postgres-prisma.vercel.app/"
          className="font-medium underline underline-offset-4 transition-colors hover:text-black"
        >
          Prisma
        </Link>
        <Link
          href="https://postgres-kysely.vercel.app/"
          className="font-medium underline underline-offset-4 transition-colors hover:text-black"
        >
          Kysely
        </Link>
        <Link
          href="https://postgres-drizzle.vercel.app/"
          className="font-medium underline underline-offset-4 transition-colors hover:text-black"
        >
          Drizzle
        </Link>
      </div>

      <div className="flex w-full justify-between px-20 py-10 sm:absolute sm:bottom-0">
        <Link href="https://vercel.com">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/vercel/examples/tree/main/storage/postgres-starter"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  );
}
