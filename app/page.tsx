import Category from 'components/Category';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import LandingHero from 'components/layout/Hero';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Wix.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <LandingHero />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Category />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
