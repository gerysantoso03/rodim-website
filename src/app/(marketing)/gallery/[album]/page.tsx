import { getAllGalleryImageBySlugAction } from '@/features/admin/actions/gallery/action';
import GalleryDetailPageUI from '@/features/marketing/gallery/ui/GalleryDetailPageUI';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const GalleryDetailPage = async ({
  params,
}: {
  params: Promise<{ album: string }>;
}) => {
  const { album } = await params;
  const galleryImageData = await getAllGalleryImageBySlugAction(album);

  if (!Array.isArray(galleryImageData)) {
    throw new Error(
      galleryImageData.message || 'Failed to get gallery folders'
    );
  }
  const messages = await getMessages(); // comes from next-intl/server

  return (
    <NextIntlClientProvider messages={messages}>
      <GalleryDetailPageUI data={galleryImageData} />
    </NextIntlClientProvider>
  );
};

export default GalleryDetailPage;
