'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/shared/components/shadcn/ui/badge';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import AlertDialogComponent from '@/shared/components/admin/AlertDialogComponent';

type ImageType = {
  id: number;
  url: string;
  name: string;
  is_visible: boolean;
};

export default function GalleryImageCard({
  image,
  galleryId,
  onDelete,
  onEdit,
  onToggleVisible,
}: {
  image: ImageType;
  galleryId: number;
  onDelete?: (id: number) => void;
  onEdit?: (image: ImageType) => void;
  onToggleVisible?: (id: number, visible: boolean) => void;
}) {
  const [imgSrc, setImgSrc] = useState(() =>
    image.url.startsWith('/') || image.url.startsWith('http')
      ? image.url
      : `/uploads/gallery_images/${image.id}/${image.url}`
  );

  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative">
        <Image
          src={imgSrc}
          alt={image.name}
          width={400}
          height={300}
          className="aspect-[4/3] object-cover w-full"
          onError={() => setImgSrc('/image/placeholder-image.png')}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="h-9 text-[14px]/[20px] bg-black/80 text-white font-semibold px-3 sm:px-4 py-1.5 rounded-full">
            {image.is_visible ? 'Visible' : 'Invisible'}
          </Badge>
        </div>
      </div>

      <div className="px-3 py-2 space-y-1">
        <p className="text-md text-gray-600 truncate pt-6">{image.name}</p>
        <div className="flex items-center justify-between gap-2 py-6">
          <div className="flex items-center gap-2">
            <AlertDialogComponent
              title={image.is_visible ? 'Hide Image?' : 'Show Image?'}
              description={`Are you sure you want to ${image.is_visible ? 'hide' : 'show'} this image from the gallery?`}
              itemName="Yes"
              type=""
              onConfirm={() => onToggleVisible?.(image.id, !image.is_visible)}
              triggerLabel={
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-md border border-[#E4E4E7] bg-white hover:bg-gray-100"
                >
                  {image.is_visible ? (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500" />
                  )}
                </Button>
              }
            />

            <AlertDialogComponent
              title="Delete Gallery Image?"
              description="Are you sure you want to delete gallery image? Deleted gallery image cannot be restored."
              itemName="Delete"
              type="warning"
              onConfirm={() => onDelete?.(image.id)}
            />
          </div>

          {/* <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-md border border-[#E4E4E7] bg-white hover:bg-gray-100"
            onClick={() => onEdit?.(image)}
          >
            <Pencil className="w-14 h-14 text-gray-700" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
