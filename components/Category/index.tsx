import { GridTileImage } from 'components/grid/tile';
import Link from 'next/link';

const categories = [
  {
    title: 'Guitar Starting From',
    slug: 'guitar',
    image: 'guitar-bg.jpg'
  },
  {
    title: 'Drums Starting From',
    slug: 'drums',
    image: 'drums-bg.jpg'
  },

  {
    title: ' Bass Starting From',
    slug: 'bass',
    image: 'bass-bg.jpg'
  },
  {
    title: 'Keyboard Starting From',
    slug: 'keyboard',
    image: 'keyboard-bg.jpg'
  },
  {
    title: 'Audio Interfaces Starting From',
    slug: 'audio-interfaces',
    image: 'audioint-bg.jpg'
  }
];

export default function Category(): JSX.Element {
  return (
    <div className="py-8">
      <h2 className="pb-4 text-2xl font-bold leading-7 text-gray-900 text-white sm:truncate sm:px-8 sm:text-3xl sm:tracking-tight md:px-32">
        Shop By Categories
      </h2>
      <ul className="flex w-full gap-8 overflow-x-auto pt-1 sm:px-8 md:px-32 ">
        {categories.map((category, indx) => (
          <li
            key={indx}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/search/${category.slug}`}>
              <GridTileImage
                alt={category.title}
                src={'/' + category.image}
                label={{
                  title: category.title,
                  amount: '60',
                  currencyCode: 'USD'
                }}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
