export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4  dark:bg-gray-900 py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center text-center">
        {children}
      </div>
    </section>
  );
}
