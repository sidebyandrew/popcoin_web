import { seed } from '@/components/postgres/seed';
import RefreshButton from '@/components/refresh-button';
import { timeAgo } from '@/utils/time';
import { sql } from '@vercel/postgres';

type Props = {};

export async function Table(props: Props) {
  const startTime = Date.now();
  let data = await extracted();
  const duration = Date.now() - startTime;
  const { rows: users } = data;

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration} ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              {/*<Image*/}
              {/*  src={user.image}*/}
              {/*  alt={user.name}*/}
              {/*  width={48}*/}
              {/*  height={48}*/}
              {/*  className="rounded-full ring-1 ring-gray-900/5"*/}
              {/*/>*/}
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

async function extracted() {
  let data;
  try {
    data = await sql`SELECT *
                         FROM users`;
  } catch (e: any) {
    console.error('=====>', e.message);
    console.error('=====>', e.message);
    console.error('=====>', e.message);
    console.error('=====>', e.message);
    console.error('=====>', e.message);
    console.error('=====>', e.message);
    if (e.message) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      );
      // Table is not created yet
      await seed();
      data = await sql`SELECT *
                             FROM users`;
    } else {
      throw e;
    }
  }

  return data;
}
