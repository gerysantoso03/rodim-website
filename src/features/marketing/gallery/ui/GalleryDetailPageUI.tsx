'use client';

import React from 'react';

import GalleryAlbum from '@/features/marketing/gallery/ui/GalleryAlbum';
import GalleryDetailHeader from '@/features/marketing/gallery/ui/GalleryDetailHeader';
import { useTranslations } from 'next-intl';

interface GalleryDetailPageUIProps {
  data: any[];
}

const GalleryDetailPageUI = ({ data }: GalleryDetailPageUIProps) => {
  const t = useTranslations('GalleryPage');

  const imageList = data.map(
    (d) => `/uploads/gallery_images/${d.id}/${d.image_url}`
  );

  return (
    <main className="section-wrapper w-full min-h-screen">
      <section className="w-full h-full flex flex-col gap-[56px] py-[100px] sm:gap-[40px] sm:px-[64px] lg:gap-[30px] lg:px-[120px]">
        <GalleryDetailHeader arrowLabel={t('galleryArrowLabel')} />
        <GalleryAlbum imageList={imageList} />
      </section>
    </main>
  );
};

export default GalleryDetailPageUI;
