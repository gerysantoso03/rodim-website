'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GalleryModal from './GalleryModal';
import { Button } from '@/shared/components/button';

const GalleryAlbum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageList = [
    '/image/gallery/temp.jpg',
    '/image/about/01.png',
    '/image/about/02.png',
    '/image/gallery/temp.jpg',
    '/image/about/01.png',
    '/image/about/02.png',
    '/image/gallery/temp.jpg',
    '/image/about/01.png',
    '/image/about/02.png',
  ];

  const handleClickImage = (i: number) => {
    setIsModalOpen(true);
    setSelectedImageIndex(i ?? 0);
  };

  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(30rem,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(32rem,1fr))] gap-[20px]">
      {imageList.map((src, i) => (
        <div
          className="relative aspect-square w-full h-fit max-w-[385px] justify-self-center cursor-pointer group"
          key={i}
          onClick={() => handleClickImage(i)}
        >
          <Image
            src={src}
            alt={`Gallery Detail ${i}`}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)] transition-all duration-200 flex items-center justify-center">
            <Button
              withIcon={false}
              className="opacity-0 transition-all duration-200 group-hover:opacity-100"
            >
              Click to View
            </Button>
          </div>
        </div>
      ))}
      <GalleryModal
        isOpen={isModalOpen}
        selectedImageIndex={selectedImageIndex}
        closeModal={() => setIsModalOpen(false)}
        imageList={imageList}
      />
    </div>
  );
};

export default GalleryAlbum;
