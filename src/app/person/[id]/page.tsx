import { WEB_DOMAIN } from '@/utils/env';

async function getPeople(queryId: string) {
  const res = await fetch(WEB_DOMAIN() + `/api/people/${queryId}`);
  return res.json();
}

export default async function PersonPage({
  params,
}: {
  params: { id: string };
}) {
  let data = await getPeople(params.id);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <>
            <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.mass}</td>
            <td>{data.hair_color}</td>
            <td>{data.skin_color}</td>
            <td>{data.eye_color}</td>
            <td>{data.gender}</td>
          </>
        </tr>
      </tbody>
    </table>
  );
}
