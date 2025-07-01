'use client';
import { products } from '@/shared/libs/data/products';
import CardProduct from '@/shared/components/card-product/CardProduct';
import VideoPlayer from '@/shared/components/video-player/VideoPlayer';
import Banner from '@/shared/components/banner/Banner';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="p-[16px] max-w-[144rem] mx-auto flex flex-col gap-[1.6rem]">
      <Banner image={''} bannerFor="home" />

      {/* <h1>{t('title')}</h1> */}

      <section>
        <VideoPlayer />
      </section>

      <section className="grid gap-[1.6rem] lg:grid-cols-2">
        {products.map((product, i) => {
          const patternIndex = i % 5; // ulangi setiap 5 item
          const spanClass =
            patternIndex === 0 || patternIndex === 1 || patternIndex === 4
              ? 'lg:col-span-2'
              : '';

          return (
            <div key={i} className={spanClass}>
              <CardProduct
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                productUrl={product.id}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
