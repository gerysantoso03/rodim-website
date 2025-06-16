import { cn } from '@/shared/libs/shadcn/utils';
import Image from 'next/image';
import React from 'react';

interface OverlayImageProps {
  urlImage: string;
  altImage: string;
  imageClassname?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const OverlayImage = ({
  urlImage,
  altImage,
  imageClassname,
  width,
  height,
  children,
}: OverlayImageProps) => {
  return (
    <div
      className={cn('w-full h-full relative overflow-hidden', width ? `max-w-[${width}rem]` : '', height ? `max-h-[${height}rem]` : '')}
    >
      <Image src={urlImage} alt={altImage} fill className={imageClassname} />
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-gradient-overlay">
        {children}
      </div>
    </div>
  );
};

export default OverlayImage;
