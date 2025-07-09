'use client';

import React from 'react';
import CardExclusive from '@/shared/components/card-exclusive/CardExclusive';
import Image from 'next/image';

import ThicknessImage from '../../../../assets/images/introductions/thickness.jpg';
import GlossImage from '../../../../assets/images/introductions/gloss.jpg';
import QuvImage from '../../../../assets/images/introductions/QUV.jpg';
import WarrantImage from '../../../../assets/images/introductions/warranty.jpg';

import ThicknessIcon from '../../../../assets/icons/thickness.svg';
import GlossIcon from '../../../../assets/icons/gloss.svg';
import QuvIcon from '../../../../assets/icons/QUV.svg';
import WarrantyIcon from '../../../../assets/icons/warranty.svg';
import OfficeSlider from '@/shared/components/office-slider/OfficeSlider';
import { useTranslations } from 'next-intl';

interface ProductPageUIProps {
  data: any;
}

const ProductPageUI = ({ data }: ProductPageUIProps) => {
  const t = useTranslations('ProductRodimPage');

  return (
    <div className="p-[16px] max-w-[144rem] mx-auto flex flex-col gap-[1.6rem]">
      <section className="w-full h-[52rem] lg:h-[80rem] relative overflow-hidden rounded-[18px]">
        <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

        <Image
          src={`/uploads/product_images/${data.id}/${data.image_url}`}
          alt="hero image"
          width={0}
          height={0}
          className="w-full h-full absolute z-[1] object-cover"
          priority
          onError={() => '/image/placeholder-image.png'}
        />

        <div className="flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] pb-[24px]">
          <h1 className="text-[40px] font-[700] lg:text-[7.2rem]">
            {data.code || ''}
          </h1>
          <p className="text-[1.4rem] lg:text-[2.1rem]">
            {data.description || ''}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-[1.6rem]">
        <div className="font-bold text-[4rem] lg:text-[7.2rem] mx-auto text-center pt-[12rem] pb-[8rem]">
          Exclusive Protection
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]">
          <CardExclusive
            image={ThicknessImage}
            icon={ThicknessIcon}
            title="Thickness"
            subtitle={data.thickness || ''}
          />
          <CardExclusive
            image={GlossImage}
            icon={GlossIcon}
            title="Gloss (60°)"
            subtitle={data.gloss || ''}
          />
          <CardExclusive
            image={QuvImage}
            icon={QuvIcon}
            title="QUV"
            subtitle={data.quv || ''}
          />
          <CardExclusive
            image={WarrantImage}
            icon={WarrantyIcon}
            title="Warranty"
            subtitle={data.warranty || ''}
          />
        </div>
      </section>

      <OfficeSlider title={t('globalGallery')} />
    </div>
  );
};

export default ProductPageUI;
