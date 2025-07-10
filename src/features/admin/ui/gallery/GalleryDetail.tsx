// ✅ GalleryDetail.tsx
'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/shared/components/shadcn/ui/button';
import GalleryImageForm from '@/features/admin/ui/gallery/GalleryImageForm';
import GalleryImageCard from '@/features/admin/ui/gallery/GalleryImageCard';
import {
  createGalleryImageAction,
  deleteGalleryImageAction,
  toggleGalleryImageVisibilityAction,
} from '@/features/admin/actions/gallery/action';
import SuccessAlertDialog from '@/shared/components/success-alert-dialog/SuccessAlertDialog';
import FailedAlertDialog from '@/shared/components/failed-alert-dialog/FailedAlertDialog';

export type ImageType = {
  id: number;
  name: string;
  url: string;
  is_visible: boolean;
};

export default function GalleryDetail({
  title,
  total,
  images = [],
  galleryId,
}: {
  title: string;
  total: number;
  images?: ImageType[];
  galleryId: number;
}) {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<ImageType | null>(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);

  const handleAddImage = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleImageSubmit = async (data: { file: File; visible: boolean }) => {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('is_visible', String(data.visible));
    formData.append('gallery_id', String(galleryId));

    const result = await createGalleryImageAction(formData);
    if (result.success) {
      setOpenSuccess(true);
      // setTimeout(() => window.location.reload(), 3000);
    } else {
      setOpenFailed(true);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    const result = await deleteGalleryImageAction(imageId);
    if (result.success) {
      setOpenSuccess(true);
      // setTimeout(() => window.location.reload(), 3000);
    } else {
      setOpenFailed(true);
    }
  };

  const handleToggleVisibility = async (
    imageId: number,
    isVisible: boolean
  ) => {
    const result = await toggleGalleryImageVisibilityAction(
      imageId,
      !isVisible
    );
    if (result.success) {
      setOpenSuccess(true);
      // setTimeout(() => window.location.reload(), 3000);
    } else {
      setOpenFailed(true);
    }
  };

  const handleEditImage = (image: ImageType) => {
    setEditData(image);
    setShowModal(true);
  };

  return (
    <>
      <GalleryImageForm
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleImageSubmit}
        // defaultData={editData} // for editing
      />

      <div className="mb-4 mt-10 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-neutral-800">
          {title} - {total} Images
        </h3>
        <Button
          onClick={handleAddImage}
          className="bg-black text-white hover:bg-gray-900 w-[151px] h-[40px] rounded-md text-[14px]/[20px]"
        >
          <Plus className="w-4 h-4 mr-1" /> Add Image
        </Button>
      </div>
      <div className="rounded-xl border-1 border-[#E4E4E7] px-6 py-6">
        <h4 className="font-bold text-black pb-10 text-[20px]">
          Gallery Images
        </h4>
        {images.length === 0 ? (
          <div className="border rounded-xl bg-white py-16 flex flex-col items-center text-center">
            <p className="text-muted-foreground">
              No data available in the gallery detail yet.
            </p>
            <Button
              onClick={handleAddImage}
              className="bg-black text-white hover:bg-gray-900 w-[151px] h-[40px] rounded-md text-[14px]/[20px]"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Image
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <GalleryImageCard
                key={image.id}
                image={image}
                galleryId={galleryId}
                onDelete={() => handleDeleteImage(image.id)}
                onEdit={() => handleEditImage(image)}
                onToggleVisible={() =>
                  handleToggleVisibility(image.id, image.is_visible)
                }
              />
            ))}
          </div>
        )}
      </div>

      <SuccessAlertDialog
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        autoCloseMs={300000}
        message="Operation successful!"
      />

      <FailedAlertDialog
        open={openFailed}
        onOpenChange={setOpenFailed}
        autoCloseMs={3000}
        message="Something went wrong. Please try again."
      />
    </>
  );
}
