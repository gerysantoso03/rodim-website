import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/components/button';
const GalleryCard = () => {
  return (
    <div className="w-full max-w-[59rem] h-[50rem] p-[1px] bg-gradient-to-b from-white/40 to-transparent rounded-[18px] overflow-hidden lg:h-[59rem] justify-self-center">
      <div className="w-full h-full flex flex-col justify-between items-center rounded-[18px] bg-[#1F1F1F] p-[20px] gap-20 sm:p-[32px] lg:p-[40px]">
        <div className="flex justify-center items-center flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px]">
          <h4 className="text-center text-white tracking-[-0.14px] leading-normal font-bold text-[36px] lg:leading-[52px] lg:text-[44px]">
            RODIM Experience Center
          </h4>
          <Link href="">
            <Button>Lihat Galery</Button>
          </Link>
        </div>
        <div className="w-full bg-gradient-to-br from-white/12 to-transparent p-[2px] overflow-hidden rounded-[18px]">
          <div className="mt-auto relative w-full min-h-[29rem] rounded-[18px] overflow-hidden">
            <Image src="/image/gallery/temp.jpg" alt="folder image" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
