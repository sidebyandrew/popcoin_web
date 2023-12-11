import { Person } from '@/interfaces';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';

type PersonProps = {
  person: Person;
};

export default function PersonInfo({ person }: PersonProps) {
  return (
    <li>
      <NextLink href="/person/[id]" as={`/person/${person.id}`}>
        {person.name}
      </NextLink>

      <Link
        href={`/person/${person.id}`}
        showAnchorIcon
        isBlock
        color="success"
        underline="active"
      >
        {person.name}
      </Link>
    </li>
  );
}
