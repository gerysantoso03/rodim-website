'use client';

import { useState } from 'react';
import { Button } from '@/shared/components/shadcn/ui/button';
import { GalleryFolderForm } from '@/features/admin/ui/gallery/GalleryFolderForm';
import type { GalleryFolderType } from '@/features/admin/ui/gallery/GalleryFolderForm';
import { createGalleryFolderAction } from '@/features/admin/actions/gallery/action';
import SuccessAlertDialog from '@/shared/components/success-alert-dialog/SuccessAlertDialog';
import FailedAlertDialog from '@/shared/components/failed-alert-dialog/FailedAlertDialog';

const GalleryPageHeader = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);

  const handleSubmit = async (values: GalleryFolderType, file?: File) => {
    try {
      if (!file) {
        console.error('File is required');
        setOpenFailed(true);
        return;
      }

      const maxSizeMB = 10;
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        console.error(`File size exceeds ${maxSizeMB}MB`);
        alert(`Image size must be less than ${maxSizeMB}MB`);
        return;
      }

      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('is_visible', String(values.is_visible));
      formData.append('file', file);

      await createGalleryFolderAction(formData);

      setOpenForm(false);
      setOpenSuccess(true);
      // window.location.reload();
    } catch (error) {
      console.error('Failed to create gallery folder', error);
      setOpenForm(false);
      setOpenFailed(true);
    }
  };

  return (
    <>
      <div className="w-full h-[80px] border-b-2 border-gray-200 flex items-center justify-between">
        <div>
          <h1 className="text-[#09090B] font-semibold text-[24px]/[32px]">
            Gallery
          </h1>
          <p className="text-[14px]/[20px] text-[#71717A] mt-1">
            Create and manage your gallery collections
          </p>
        </div>
        <Button
          onClick={() => setOpenForm(true)}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 w-[151px] h-[40px] rounded-md text-[14px]/[20px] hover:bg-gray-900"
        >
          <span>＋</span> New Gallery
        </Button>
      </div>

      <GalleryFolderForm
        open={openForm}
        onOpenChange={setOpenForm}
        mode="create"
        onSubmit={handleSubmit}
      />

      <SuccessAlertDialog
        autoCloseMs={5000}
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        message="Gallery Folder successfully created!"
      />

      <FailedAlertDialog
        autoCloseMs={5000}
        open={openFailed}
        onOpenChange={setOpenFailed}
        message="Failed to create gallery folder. Please try again."
      />
    </>
  );
};

export default GalleryPageHeader;
