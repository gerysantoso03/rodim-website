'use client';
import { products } from '@/shared/libs/data/products';
import CardProduct from '@/shared/components/card-product/CardProduct';
import VideoPlayer from '@/shared/components/video-player/VideoPlayer';
// import Banner from '@/shared/components/banner/Banner';
import HeroImage from '../../assets/images/banners/hero.jpg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SectionWrapper from '@/shared/components/section-wrapper/SectionWrapper';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <SectionWrapper>
      <section
        className={'w-full h-[52rem] lg:h-[80rem] relative overflow-hidden rounded-[18px]'}
      >
        <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />
  
        <Image
          src={HeroImage}
          alt="hero image"
          width={0}
          height={0}
          className={'w-full h-full absolute z-[1] object-cover'}
          priority
        />

        <div
          className={'flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] lg:px-[4.6rem] pb-[24px] lg:pb-[4.6rem]'}
        >
          <h1 className="text-[40px] font-[700] lg:text-[7.2rem] leading-[110%] lg:leading-[80px]">
            RODIM {'-'} Protection by World{"'"}s Best
          </h1>
          <p className="text-[1.4rem] lg:text-[2.1rem]">
            {t('homeIntroduction')}
          </p>
        </div>
      </section>

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
    </SectionWrapper>
  );
}
