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
import { Label } from '@/shared/components/shadcn/ui/label';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Switch } from '@/shared/components/shadcn/ui/switch';
import { Upload, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { truncateFileName } from '@/shared/helpers/helpers';

export default function GalleryImageForm({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { file: File; visible: boolean }) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  const formatBytes = (bytes: number) =>
    bytes < 1024
      ? `${bytes} B`
      : bytes < 1024 * 1024
        ? `${(bytes / 1024).toFixed(0)} KB`
        : `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const sizeMB = selected.size / (1024 * 1024);
    if (sizeMB > 5) {
      alert('File size exceeds 5MB. Please select a smaller file.');
      return;
    }

    setFile(selected);
    setFileSize(formatBytes(selected.size));
  };

  const handleSubmit = () => {
    if (file) {
      onSubmit({ file, visible });
      onClose();
      setFile(null);
      setVisible(true);
    }
  };

  const handleFileDelete = () => {
    setFile(null);
    setFileSize(null);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] py-12 px-8">
        {/* Manual close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-[18px] text-black">
            Add New Image
          </DialogTitle>
          <DialogDescription className="text-[14px] text-muted-foreground">
            Upload a new image to this gallery
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-8">
          {/* Upload Section */}
          <div>
            <Label className="block text-black text-[14px] pb-2">Image*</Label>
            {!file ? (
              <label
                htmlFor="upload-image"
                className="flex items-center gap-2 border text-[14px] border-gray-200 rounded-md w-full h-14 px-4 py-2 cursor-pointer text-gray-500"
              >
                <Upload className="w-4 h-4" />
                Upload image
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 bg-gray-50">
                <div className="flex-1 text-gray-600 truncate">
                  <span className="text-[14px]">
                    {truncateFileName(file.name)} {fileSize && `(${fileSize})`}
                  </span>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="reupload-image">
                    <input
                      id="reupload-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="border-1 border-[#E4E4E7] w-14 h-14"
                    >
                      <Upload className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </label>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="border-1 border-[#E47777] w-14 h-14"
                    onClick={handleFileDelete}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Visibility Switch */}
          <div className="flex items-center gap-3">
            <Switch
              id="visible"
              checked={visible}
              onCheckedChange={setVisible}
              className="w-12 h-6"
            />
            <Label htmlFor="visible" className="text-black text-[14px]">
              Make image visible
            </Label>
          </div>
        </div>

        {/* Action Buttons */}
        <DialogFooter className="mt-6 flex justify-end gap-4 pt-40">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-[120px] text-black text-[14px] border-gray-300"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
            disabled={!file}
            className={`w-[160px] text-[14px] ${
              file
                ? 'bg-black text-white hover:bg-gray-900'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Add Image
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
