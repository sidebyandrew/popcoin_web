export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4  py-8 dark:bg-gray-900 md:py-10">
      <div className="inline-block  justify-center text-center">{children}</div>
    </section>
  );
}
