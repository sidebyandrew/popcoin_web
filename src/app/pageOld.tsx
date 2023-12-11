import CardFlex from '@/components/cardFlex';

export default function Home() {
  return (
    <div>
      <section className="bg-white bg-[url('/images/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('/images/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-10">
          <a
            href="https://cosmoverse.org/"
            target="_blank"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-blue-100 px-1 py-1 pr-4 text-sm text-indigo-700 hover:bg-blue-200 dark:bg-indigo-900 dark:text-blue-300 dark:hover:bg-indigo-800"
          >
            <span className="mr-3 rounded-full bg-indigo-600 px-4 py-1.5 text-xs text-white">
              Upcoming
            </span>
            <span className="text-sm font-medium">Cosmmoverse at Istabbul</span>
            <svg
              className="ml-2 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl">
            Social Events With Pleasure.
          </h1>
          <p className="mb-8 hidden text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:block lg:px-48 lg:text-xl">
            Epic conferences, side events, local meetups, webinars, venues
            rating, hotel sharing... Well not quite anything, but all your need.
          </p>
          <form className="mx-auto w-full max-w-md">
            <label
              htmlFor="default-email"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search Events
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="input"
                id="default-search"
                className="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="event keywords..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-indigo-100 to-transparent dark:from-gray-900"></div>
      </section>

      <main className="relative">
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-10">
            <div className="mx-auto mb-2 text-center lg:mb-2">
              <h3 className="mb-4 text-left text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                Epic Conferences
              </h3>
            </div>

            <CardFlex />
          </div>
        </section>
      </main>
    </div>
  );
}
