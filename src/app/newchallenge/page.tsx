import { subtitle, title } from '@/components/primitives';

export default function NewChallenge() {
  return (
    <div>
      <h1 className={title()}>NewChallenge</h1>
      <p
        className={subtitle({
          class: 'flex items-center justify-center text-center md:w-full',
        })}
      >
        Under construction...
      </p>
    </div>
  );
}
