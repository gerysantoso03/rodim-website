import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface GalleryDetailHeaderProps {
  arrowLabel: string;
}

const GalleryDetailHeader = ({ arrowLabel }: GalleryDetailHeaderProps) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Link href="/gallery" className="w-fit">
        <div className="cursor-pointer flex items-center gap-[10px] text-white transition-all duration-200 hover:text-gray-400 w-fit">
          <ArrowLeft className="w-6 h-6" />
          <span className="tracking-[-0.37px] leading-[20px] text-[14px] sm:text-[16px] lg:text-[18px]">
            {arrowLabel}
          </span>
        </div>
      </Link>
      <h1 className="text-white tracking-[-1.2px] font-bold text-[36px] sm:text-[40px] lg:text-[46px]">
        RODIM Experience Center
      </h1>
    </div>
  );
};

export default GalleryDetailHeader;
