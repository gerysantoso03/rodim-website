'use client';

import Image from 'next/image';
import { Eye, EyeOff, Pencil } from 'lucide-react';
import { useState } from 'react';
import AlertDialogComponent from '@/shared/components/admin/AlertDialogComponent';
import { Card, CardContent } from '@/shared/components/shadcn/ui/card';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Badge } from '@/shared/components/shadcn/ui/badge';

export type GalleryType = {
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

type Props = {
  gallery: GalleryType;
  onEdit: (gallery: GalleryType) => void;
  onChangeVisibility: (gallery: GalleryType) => void;
  onDelete: (gallery: GalleryType) => void;
  onManageImages: (gallery: GalleryType) => void;
};

const GalleryFolderCard = ({
  gallery,
  onEdit,
  onChangeVisibility,
  onDelete,
  onManageImages,
}: Props) => {
  const [imgSrc, setImgSrc] = useState(() => {
    if (!gallery.cover_image) {
      return '/image/placeholder-image.png';
    }

    return `/uploads/gallery_folder/${gallery.id}/${gallery.cover_image}`;
  });

  const createdDate = gallery.created_at
    ? new Date(gallery.created_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : '-';

  const updatedDate = gallery.updated_at
    ? new Date(gallery.updated_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : '-';

  const handleSubmit = (e: React.FormEvent, action: () => void) => {
    e.preventDefault();
    action();
  };

  return (
    <Card className="p-0 shadow-sm border-1 border-[#E4E4E7] rounded-lg overflow-hidden">
      <div className="relative w-full h-100 max-h-100 bg-gray-100">
        <Image
          src={
            imgSrc.startsWith('http')
              ? imgSrc
              : imgSrc.startsWith('/')
                ? imgSrc
                : `/${imgSrc}`
          }
          alt={gallery.title}
          fill
          className="object-cover"
          onError={() => setImgSrc('/image/placeholder-image.png')}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="h-9 text-[14px]/[20px] bg-white/80 text-black font-semibold px-3 sm:px-4 py-1.5 rounded-full">
            {gallery._count.gallery_images || 0} images
          </Badge>
          <Badge className="h-9 text-[14px]/[20px] bg-black/80 text-white font-semibold px-3 sm:px-4 py-1.5 rounded-full">
            {gallery.is_visible ? 'Visible' : 'Invisible'}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-[16px]/[20px] font-semibold mb-1 line-clamp-1">
          {gallery.title}
        </h3>
        <div className="text-[12px]/[20px] text-gray-500 mb-3 py-4">
          Created: {createdDate}
          <br />
          Updated: {updatedDate}
        </div>
        <div className="flex gap-2">
          <form
            onSubmit={(e) => handleSubmit(e, () => onManageImages(gallery))}
            className="flex-1"
          >
            <Button
              type="submit"
              variant="default"
              className="w-40 text-[12px]/[20px] h-14"
            >
              Manage Images
            </Button>
          </form>

          {/* <form
            onSubmit={(e) => handleSubmit(e, () => onChangeVisibility(gallery))}
            className="flex-2"
          >
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="h-14 w-14 border-1 border-[#E4E4E7]"
            >
              {gallery.is_visible ? (
                <EyeOff className="text-gray-500" />
              ) : (
                <Eye className="text-gray-500" />
              )}
            </Button>
          </form> */}

          <div className="flex-2">
            <AlertDialogComponent
              title="Change Visibility Folder?"
              description="Are you sure you want to change visibility of this gallery folder? This action cannot be undone."
              itemName="Submit"
              onConfirm={() => onChangeVisibility(gallery)}
              triggerLabel={
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 border-1 border-[#E4E4E7]"
                >
                  {gallery.is_visible ? (
                    <EyeOff className="text-gray-500" />
                  ) : (
                    <Eye className="text-gray-500" />
                  )}
                </Button>
              }
            />
          </div>

          {/* <form onSubmit={(e) => handleSubmit(e, () => onEdit(gallery))}> */}
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            onClick={() => onEdit(gallery)}
            className="h-14 w-14 border-1 border-[#E4E4E7]"
          >
            <Pencil className="text-gray-500" />
          </Button>
          {/* </form> */}

          <AlertDialogComponent
            title="Delete Gallery Folder?"
            description="Are you sure you want to delete gallery folder? Deleted gallery folder cannot be restored."
            itemName="Delete Gallery"
            type="warning"
            onConfirm={() => onDelete(gallery)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryFolderCard;
