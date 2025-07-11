import {
  getAllGalleryFolderAction,
  getAllGalleryImageBySlugAction,
} from '@/features/admin/actions/gallery/action';
import GalleryDetailPageUI from '@/features/marketing/gallery/ui/GalleryDetailPageUI';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { redirect } from 'next/navigation';

const GalleryDetailPage = async ({
  params,
}: {
  params: Promise<{ album: string }>;
}) => {
  const { album } = await params;
  const galleryImageData = await getAllGalleryImageBySlugAction(album);
  const galleryFolderData = await getAllGalleryFolderAction();

  if (!Array.isArray(galleryImageData)) {
    throw new Error(
      galleryImageData.message || 'Failed to get gallery folders'
    );
  } else if (!Array.isArray(galleryFolderData)) {
    throw new Error(
      galleryFolderData.message || 'Failed to get gallery folders'
    );
  }

  const isFolderVisible = galleryFolderData.find(
    (data) => album.toLowerCase() == data.slug?.toLowerCase()
  )?.is_visible;

  if (!isFolderVisible) {
    redirect('/gallery');
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <GalleryDetailPageUI data={galleryImageData} />
    </NextIntlClientProvider>
  );
};

export default GalleryDetailPage;
