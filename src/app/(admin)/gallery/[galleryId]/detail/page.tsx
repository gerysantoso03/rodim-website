import { getAllGalleryFolderAction } from '@/features/admin/actions/gallery/action';
import GalleryPageHeader from '@/features/admin/ui/gallery/GalleryPageHeader';
import GalleryPageUI from '@/features/admin/ui/gallery/GalleryPage';
import React from 'react';

const GalleryPage = async () => {
  const result = await getAllGalleryFolderAction();

  if (!Array.isArray(result)) {
    throw new Error(result.message || 'Failed to get gallery folders');
  }

  const galleryFolders = result.map((g) => ({
    id: g.id,
    title: g.title,
    slug: g.slug,
    cover_image: g.cover_image,
    is_visible: g.is_visible,
    created_at: g.created_at ? g.created_at.toISOString() : null,
    created_by: g.created_by,
    updated_at: g.updated_at ? g.updated_at.toISOString() : null,
    updated_by: g.updated_by,
    status: g.status,
    _count: { gallery_images: g._count.gallery_images },
  }));

  return (
    <>
      <GalleryPageHeader />
      <GalleryPageUI galleryFolders={galleryFolders} />
    </>
  );
};

export default GalleryPage;
