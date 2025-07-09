'use client';

import React from 'react';

import Banner from '@/shared/components/banner/Banner';
import { InfiniteScrollSlider } from '@/shared/components/infinite-scroll-slider';
import GalleryCard from './GalleryCard';
import GalleryHeroImage from '../../../../assets/images/gallery/header.jpg';
import { imageTopList, imageBottomList } from '../const/const';
import { useTranslations } from 'use-intl';

interface GalleryPageUIProps {
  galleryCardData: any[];
}

const GalleryPageUI = ({ galleryCardData }: GalleryPageUIProps) => {
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
            {galleryCardData.length > 0 &&
              galleryCardData.map((galleryData) => (
                <GalleryCard
                  title={(galleryData.title as string) || ''}
                  slug={(galleryData.slug as string) || ''}
                  img={galleryData.cover_image as string}
                  id={galleryData.id as number}
                  key={galleryData.id}
                  buttonLabel={t('buttonLabel')}
                />
              ))}
          </div>
        </section>
        <section className="w-full relative overflow-hidden bg-[#1F1F1F] rounded-[18px] py-20">
          <div className="w-full py-28  px-10 lg:px-20">
            <h3 className="text-center text-white font-bold tracking-[-0.28px] text-[36px] sm:text-[40px] lg:text-[56px]">
              {t('globalGallery')} <br /> RODIM Experience Center
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

export default GalleryPageUI;
