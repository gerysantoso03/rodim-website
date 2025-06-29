import GalleryDetailHeader from '@/features/admin/ui/gallery/GalleryDetailHeader';
import GalleryDetail from '@/features/admin/ui/gallery/GalleryDetail';
import { getGalleryFolderWithImagesAction } from '@/features/admin/actions/gallery/action';

export default async function GalleryDetailPage({
  params,
}: {
  params: { galleryId: string };
}) {
  const galleryId = Number(params.galleryId);
  const result = await getGalleryFolderWithImagesAction(galleryId);

  if (!result.success) {
    return <div className="text-red-500">{result.message}</div>;
  }

  const { title, images } = result.data;

  return (
    <div className="space-y-6">
      <GalleryDetailHeader />
      <GalleryDetail
        title={title}
        total={images.length}
        images={images}
        galleryId={galleryId}
      />
    </div>
  );
}
