import { getAllGalleryImageAction } from '@/features/admin/actions/gallery/action';
import GalleryDetailPageUI from '@/features/marketing/gallery/ui/GalleryDetailPageUI';
import { redirect } from 'next/navigation';

const GalleryDetailPage = async ({
  params,
}: {
  params: Promise<{ album: string }>;
}) => {
  const { album } = await params;
  const galleryImageData = await getAllGalleryImageAction(parseInt(album));

  if (!galleryImageData) {
    redirect('/');
    return null;
  }

  return <GalleryDetailPageUI data={galleryImageData} />;
};

export default GalleryDetailPage;
