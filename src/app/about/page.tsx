import { title } from '@/components/primitives';
import { getDictionary } from '@/i18n/dictionaries';

export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang); // default en

  return (
    <div>
      <h1 className={title()}>About {params.lang}</h1>

      <h2>{dict.events.event}</h2>
    </div>
  );
}
