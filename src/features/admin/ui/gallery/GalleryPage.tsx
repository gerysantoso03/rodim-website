'use client';

import { useState } from 'react';
import { Button } from '@/shared/components/shadcn/ui/button';
import GalleryFolderCard from '@/features/admin/ui/gallery/GalleryFolderCard';
import { useRouter } from 'next/navigation';
import type { GalleryFolderType } from '@/features/admin/ui/gallery/GalleryFolderForm';
import {
  deleteGalleryFolderAction,
  editGalleryFolderAction,
  createGalleryFolderAction,
  toggleGalleryFolderVisibilityAction,
} from '@/features/admin/actions/gallery/action';
import GalleryFolderForm from '@/features/admin/ui/gallery/GalleryFolderForm';
import SuccessAlertDialog from '@/shared/components/success-alert-dialog/SuccessAlertDialog';
import FailedAlertDialog from '@/shared/components/failed-alert-dialog/FailedAlertDialog';

type GalleryFolder = {
  id: number;
  title: string;
  slug: string | null;
  cover_image: string | null;
  is_visible: boolean;
  created_at: string | null;
  created_by: number | null;
  updated_at: string | null;
  updated_by: number | null;
  status: number | null;
  _count: { gallery_images: number };
};

type GalleryPageUIProps = {
  galleryFolders: GalleryFolder[];
};

const GalleryPageUI = ({ galleryFolders }: GalleryPageUIProps) => {
  const router = useRouter();
  const [editGallery, setEditGallery] = useState<GalleryFolder | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);

  const handleEdit = async (gallery: GalleryFolder) => {
    setEditGallery(gallery);
    setIsCreateMode(false);
    setOpenForm(true);
  };

  const handleDelete = async (gallery: GalleryFolder) => {
    await deleteGalleryFolderAction(gallery.id);
    router.refresh();
  };

  const handleManageImages = (gallery: GalleryFolder) => {
    router.push(`/gallery-admin/${gallery.id}/detail`);
  };

  const handleChangeVisibility = async (gallery: GalleryFolder) => {
    await toggleGalleryFolderVisibilityAction(gallery.id, gallery.is_visible);
    router.refresh();
  };

  const handleSubmit = async (values: GalleryFolderType, file?: File) => {
    try {
      if (isCreateMode) {
        if (!file) {
          setOpenFailed(true);
          return;
        }

        const maxSizeMB = 5;
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxSizeBytes) {
          alert(`Image size must be less than ${maxSizeMB}MB`);
          return;
        }

        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('is_visible', String(values.is_visible));
        formData.append('file', file);

        await createGalleryFolderAction(formData);
      } else if (editGallery) {
        // Hanya kirim title dan is_visible saat edit
        const formData = new FormData();
        formData.append('id', String(editGallery.id));
        formData.append('title', values.title);
        formData.append('is_visible', String(values.is_visible));

        await editGalleryFolderAction(formData);
      }

      setOpenForm(false);
      setEditGallery(null);
      setOpenSuccess(true);
      // window.location.reload();
    } catch (error) {
      console.error('Failed to save gallery folder', error);
      setOpenForm(false);
      setOpenFailed(true);
    }
  };

  return (
    <div className="pt-10">
      {galleryFolders.length === 0 ? (
        <div className="text-center space-y-4 pt-70">
          <p className="text-[14px]/[20px] text-gray-500">
            No data available in the gallery yet.
          </p>
          <Button
            onClick={() => {
              setEditGallery(null);
              setIsCreateMode(true);
              setOpenForm(true);
            }}
            className="bg-black text-white hover:bg-gray-900 w-[151px] h-[40px] rounded-md text-[14px]/[20px]"
          >
            + New Gallery
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryFolders.map((gallery) => (
              <GalleryFolderCard
                key={gallery.id}
                gallery={gallery}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onManageImages={handleManageImages}
                onChangeVisibility={handleChangeVisibility}
              />
            ))}
          </div>
        </>
      )}

      {(openForm || editGallery) && (
        <GalleryFolderForm
          open={openForm}
          onOpenChange={(open) => {
            setOpenForm(open);
            if (!open) setEditGallery(null);
          }}
          mode={isCreateMode ? 'create' : 'edit'}
          defaultValues={
            editGallery
              ? {
                  id: editGallery.id,
                  title: editGallery.title,
                  is_visible: editGallery.is_visible,
                  image_url: editGallery.cover_image || '',
                }
              : undefined
          }
          onSubmit={handleSubmit}
        />
      )}

      <SuccessAlertDialog
        autoCloseMs={5000}
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        message={`Gallery Folder successfully ${isCreateMode ? 'created' : 'updated'}!`}
      />

      <FailedAlertDialog
        autoCloseMs={5000}
        open={openFailed}
        onOpenChange={setOpenFailed}
        message={`Failed to ${isCreateMode ? 'create' : 'update'} gallery folder. Please try again.`}
      />
    </div>
  );
};

export default GalleryPageUI;
