import GalleryAlbum from '@/features/marketing/gallery/ui/GalleryAlbum';
import GalleryDetailHeader from '@/features/marketing/gallery/ui/GalleryDetailHeader';
import React from 'react';

const GalleryDetailPage = () => {
  return (
    <main className="section-wrapper w-full min-h-screen">
      <section className="w-full h-full flex flex-col gap-[56px] py-[100px] sm:gap-[40px] sm:px-[64px] lg:gap-[30px] lg:px-[120px]">
        <GalleryDetailHeader />
        <GalleryAlbum />
      </section>
    </main>
  );
};

export default GalleryDetailPage;
