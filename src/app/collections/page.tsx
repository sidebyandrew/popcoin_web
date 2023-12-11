import { subtitle, title } from '@/components/primitives';

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Collections</h1>
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
