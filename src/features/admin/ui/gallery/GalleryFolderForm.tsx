'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/shared/components/shadcn/ui/dialog';
import { Input } from '@/shared/components/shadcn/ui/input';
import { Switch } from '@/shared/components/shadcn/ui/switch';
import { Label } from '@/shared/components/shadcn/ui/label';
import { Button } from '@/shared/components/shadcn/ui/button';
import { ImagePlus, X, Upload, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { truncateFileName } from '@/shared/helpers/helpers';

export type GalleryFolderType = {
  id?: number;
  title: string;
  is_visible: boolean;
  image_url: string;
};

type GalleryFolderFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'create' | 'edit';
  defaultValues?: GalleryFolderType;
  onSubmit: (values: GalleryFolderType, file?: File) => void;
};

export const GalleryFolderForm = ({
  open,
  onOpenChange,
  mode,
  defaultValues,
  onSubmit,
}: GalleryFolderFormProps) => {
  const [title, setTitle] = useState('');
  const [is_visible, setIsVisible] = useState(false);
  const [imageName, setImageName] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [imageSize, setImageSize] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const isSubmitDisabled = !title.trim() || (mode === 'create' && !imageName);

  useEffect(() => {
    if (open) {
      setTitle(defaultValues?.title || '');
      setIsVisible(defaultValues?.is_visible ?? true);
      setImageName(defaultValues?.image_url || null);
      setImageFile(undefined);
    }
  }, [open, defaultValues]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeKB = file.size / 1024;
      const sizeMB = sizeKB / 1024;

      if (sizeMB > 10) {
        alert('File size exceeds 10 MB. Please select a smaller file.');
        return;
      }

      setImageFile(file);
      setImageName(file.name);

      if (sizeKB < 1024) {
        setImageSize(`${sizeKB.toFixed(0)} KB`);
      } else {
        setImageSize(`${sizeMB.toFixed(2)} MB`);
      }
    }
  };

  const handleSubmit = () => {
    onSubmit(
      {
        id: defaultValues?.id,
        title,
        is_visible,
        image_url: imageName ?? defaultValues?.image_url ?? '',
      },
      imageFile
    );
    onOpenChange(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px] py-12 px-8">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-8 top-4 w-12 h-12"
            >
              <X className="h-12 w-12 text-black" />
            </Button>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-black text-[24px]/[24px]">
              {mode === 'create' ? 'Create Gallery' : 'Edit Gallery'}
            </DialogTitle>
            <DialogDescription className="text-[14px]/[20px]">
              {mode === 'create'
                ? 'Create your gallery information'
                : 'Update your gallery information'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 border-1 border-gray-200 py-6 px-6 rounded-lg">
            <div>
              <h1 className="text-[16px]/[24px] text-black font-semibold pb-6">
                Gallery Details
              </h1>
              <Label
                htmlFor="title"
                className="text-black text-[14px]/[20px] pb-2"
              >
                Title*
              </Label>
              <Input
                id="title"
                placeholder="Enter your gallery title..."
                value={title}
                required
                className={`!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B] border-1 min-h-[40px] max-h-[40px]`}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {mode === 'create' && (
              <div>
                <Label className="text-black text-[14px]/[20px] pb-2">
                  Thumbnail Image*
                </Label>

                {imageName ? (
                  <div className="flex items-center justify-between border-gray-400 rounded-md p-3">
                    <span className="truncate text-gray-500 text-[14px]/[20px]">
                      {truncateFileName(imageName)}{' '}
                      {imageSize && `(${imageSize})`}
                    </span>
                    <div className="flex gap-2">
                      <label
                        htmlFor="upload-image"
                        className="flex items-center"
                      >
                        <Input
                          id="upload-image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <Button
                          variant="outline"
                          className="bg-white text-black border-gray-400 rounded-md text-[14px]/[20px]"
                        >
                          <label
                            htmlFor="upload-image"
                            className="flex items-center"
                          >
                            <span className="flex items-center gap-1">
                              <Upload className="w-4 h-4" />
                              Re-Upload Img
                            </span>
                          </label>
                        </Button>
                      </label>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 text-[14px]/[20px]"
                        onClick={() => {
                          setImageName(null);
                          setImageFile(undefined);
                        }}
                      >
                        <Trash2 className="w-4 h-4" /> Delete Img
                      </Button>
                    </div>
                  </div>
                ) : (
                  <label
                    htmlFor="upload-image"
                    className="flex items-center gap-2 border text-[14px]/[20px] border-gray-200 rounded-md w-full h-14 px-4 py-2 cursor-pointer text-gray-500"
                  >
                    <ImagePlus className="w-4 h-4" />
                    Upload Thumbnail image
                    <input
                      id="upload-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
            )}

            <div className="flex items-center gap-2">
              <Switch
                id="visible"
                className="w-12 h-8 relative"
                checked={is_visible}
                onCheckedChange={setIsVisible}
              />
              <Label
                htmlFor="visible"
                className="text-black text-[14px]/[20px]"
              >
                Make gallery visible
              </Label>
            </div>
            <DialogFooter className="flex justify-between mt-40">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="w-[120px] text-black text-[14px]/[20px]"
              >
                Cancel
              </Button>
              <Button
                className={`w-[160px] text-[14px]/[20px] ${
                  isSubmitDisabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
                disabled={isSubmitDisabled}
                onClick={() => {
                  if (!isSubmitDisabled) {
                    setConfirmOpen(true);
                  }
                }}
              >
                {mode === 'create' ? 'Create Gallery' : 'Update Gallery'}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-black text-[18px]/[24px]">
              {mode === 'create'
                ? 'Are you sure to create new gallery?'
                : 'Are you sure to update this gallery?'}
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setConfirmOpen(false)}
              className="w-[100px] text-black"
            >
              No
            </Button>
            <Button
              className="bg-black text-white hover:bg-gray-900 w-[100px]"
              onClick={() => {
                handleSubmit();
                setConfirmOpen(false);
              }}
            >
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryFolderForm;
