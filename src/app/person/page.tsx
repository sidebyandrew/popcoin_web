import PersonInfo from '@/components/person-info';
import { Person } from '@/interfaces';
import { WEB_DOMAIN } from '@/utils/env';

export default async function PersonPage() {
  const res = await fetch(WEB_DOMAIN() + `/api/people/`);
  let jsonPromise = res.json();
  let json = await jsonPromise;
  return (
    <ul>
      {json.map((p: Person) => (
        <PersonInfo person={p} key={p.id} />
      ))}
    </ul>
  );
}
