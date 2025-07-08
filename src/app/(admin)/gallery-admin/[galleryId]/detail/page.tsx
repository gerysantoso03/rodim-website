import GalleryDetailHeader from '@/features/admin/ui/gallery/GalleryDetailHeader';
import GalleryDetail from '@/features/admin/ui/gallery/GalleryDetail';
import { getGalleryFolderWithImagesAction } from '@/features/admin/actions/gallery/action';

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ galleryId: string }>;
}) {
  const { galleryId } = await params;

  if (!galleryId) {
    return <div className="text-red-500">Gallery ID not provided</div>;
  }

  const numericGalleryId = Number(galleryId);

  const result = await getGalleryFolderWithImagesAction(numericGalleryId);

  if (!result.success || !result.data) {
    return (
      <div className="text-red-500">
        {result.message ?? 'Failed to load gallery'}
      </div>
    );
  }

  const title = result.data.title ?? '-';
  const images = result.data.images ?? [];

  return (
    <div className="space-y-6">
      <GalleryDetailHeader />
      <GalleryDetail
        title={title}
        total={images.length}
        images={images}
        galleryId={numericGalleryId}
      />
    </div>
  );
}
