import React from 'react';
import { useTranslations } from 'next-intl';

import Banner from '@/shared/components/banner/Banner';
import GalleryHeroImage from '../../../assets/images/gallery/header.jpg';
import GalleryCard from '@/features/marketing/gallery/ui/GalleryCard';
import { InfiniteScrollSlider } from '@/shared/components/infinite-scroll-slider';

import Top1 from '../../../assets/images/gallery/slider/top-1.jpg';
import Top2 from '../../../assets/images/gallery/slider/top-2.jpg';
import Top3 from '../../../assets/images/gallery/slider/top-3.jpg';
import Top4 from '../../../assets/images/gallery/slider/top-4.jpg';
import Top5 from '../../../assets/images/gallery/slider/top-5.jpg';

import Bottom1 from '../../../assets/images/gallery/slider/bottom-1.jpg';
import Bottom2 from '../../../assets/images/gallery/slider/bottom-2.jpg';
import Bottom3 from '../../../assets/images/gallery/slider/bottom-3.jpg';
import Bottom4 from '../../../assets/images/gallery/slider/bottom-4.jpg';
import Bottom5 from '../../../assets/images/gallery/slider/bottom-5.jpg';

const imageTopList = [Top1, Top2, Top3, Top4, Top5];
const imageBottomList = [Bottom1, Bottom2, Bottom3, Bottom4, Bottom5];

const GalleryPage = () => {
  const t = useTranslations('GalleryPage');
  return (
    <div className="w-full h-full min-h-screen">
      <header className="section-wrapper relative">
        <Banner
          image={GalleryHeroImage}
          sectionClassName="h-[58rem] lg:h-[54rem]"
          classname="object-cover object-center"
          useOverlay={false}
        >
          <h1 className="font-bold leading-[100%] md:leading-[8rem] text-[4rem] md:text-[8rem] md:w-[70%]">
            {t('galleryTitle')}
          </h1>
        </Banner>
      </header>
      <main className="section-wrapper">
        <section className="w-full min-h-screen py-20 sm:px-8 lg:py-28 lg:px-14">
          <div className="w-full h-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            <GalleryCard />
            <GalleryCard />
          </div>
        </section>
        <section className="w-full relative overflow-hidden bg-[#1F1F1F] rounded-[18px] py-20">
          <div className="w-full py-28  px-10 lg:px-20">
            <h3 className="text-center text-white font-bold tracking-[-0.28px] text-[36px] sm:text-[40px] lg:text-[56px]">
              Kunjungi Kami di <br /> RODIM Experience Center
            </h3>
          </div>
          <div className="w-full min-h-[800px]">
            <div className="w-full space-y-[20px] overflow-hidden">
              <InfiniteScrollSlider imageList={imageTopList} reverseDirection />
              <InfiniteScrollSlider imageList={imageBottomList} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;
