import React from 'react';
import GalleryPageUI from '@/features/marketing/gallery/ui/GalleryPageUI';
import { getAllGalleryFolderAction } from '@/features/admin/actions/gallery/action';

const GalleryPage = async () => {
  const result = await getAllGalleryFolderAction();

  if (!Array.isArray(result)) {
    throw new Error(result.message || 'Failed to get gallery folders');
  }

  const galleryData = result.filter((data) => data.is_visible);

  return <GalleryPageUI galleryCardData={galleryData ?? []} />;
};

export default GalleryPage;
