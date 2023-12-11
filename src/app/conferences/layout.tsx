import { title } from '@/components/primitives';

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 py-1 md:py-2">
      <div className=" m-2 items-start justify-start text-start ">
        <h2 className={title({ size: 'sm' })}>Conferences</h2>
      </div>
      <div className="inline-block w-full items-center justify-center text-start">
        {children}
      </div>
    </section>
  );
}
