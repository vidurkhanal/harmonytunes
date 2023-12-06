import Image from 'next/image';
import Link from 'next/link';

export default function LandingHero() {
  return (
    <section className="lg:p relative mb-10 min-h-[40vh] w-full bg-gray-200 p-4 pl-[5rem] dark:bg-gray-800 md:py-24 xl:py-48">
      <Image
        src={'/hero-bg.jpg'}
        alt="Musical Instruments Background"
        height={'1920'}
        width={'1080'}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
      <div className="relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex-column w-full items-center space-y-4 text-center ">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl lg:text-7xl">
                The finest musical instruments
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-700 dark:text-gray-300">
                Discover the perfect sound with our high quality instruments.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100 dark:focus-visible:ring-gray-700"
                href="#"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
