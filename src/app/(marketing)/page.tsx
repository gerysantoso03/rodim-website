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
      <Banner image={''} bannerFor="home">
        <h1 className="text-[40px] font-[700] lg:text-[7.2rem]">
          RODIM {'-'} Protection by World{"'"}s Best
        </h1>
        <p className="text-[1.4rem] lg:text-[2.1rem]">
          {t('homeIntroduction')}
        </p>
      </Banner>

      <section
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
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
                buttonLabel={t('buttonLabel')}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
