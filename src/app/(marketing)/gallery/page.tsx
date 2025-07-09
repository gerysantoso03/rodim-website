import React from 'react';
import GalleryPageUI from '@/features/marketing/gallery/ui/GalleryPageUI';
import { getAllGalleryFolderAction } from '@/features/admin/actions/gallery/action';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const GalleryPage = async () => {
  const result = await getAllGalleryFolderAction();

  if (!Array.isArray(result)) {
    throw new Error(result.message || 'Failed to get gallery folders');
  }

  const galleryData = result.filter((data) => data.is_visible);
 // Get server translations
  const messages = await getMessages(); // comes from next-intl/server


  return (
    <NextIntlClientProvider messages={messages}>
      <GalleryPageUI galleryCardData={galleryData ?? []} />
    </NextIntlClientProvider>
  );
};

export default GalleryPage;
