import {
  getAllGalleryImageAction,
  getAllGalleryImageBySlugAction,
} from '@/features/admin/actions/gallery/action';
import GalleryDetailPageUI from '@/features/marketing/gallery/ui/GalleryDetailPageUI';

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

  return <GalleryDetailPageUI data={galleryImageData} />;
};

export default GalleryDetailPage;
