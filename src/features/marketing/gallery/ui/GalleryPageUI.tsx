'use client';

import React from 'react';

import Banner from '@/shared/components/banner/Banner';
import GalleryCard from './GalleryCard';
import GalleryHeroImage from '../../../../assets/images/gallery/header.jpg';
import { useTranslations } from 'use-intl';
import OfficeSlider from '@/shared/components/office-slider/OfficeSlider';

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

        <OfficeSlider title={t('globalGallery')} />
      </main>
    </div>
  );
};

export default GalleryPageUI;
