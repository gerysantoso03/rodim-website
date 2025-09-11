'use client';

import React from 'react';
import CardExclusive from '@/shared/components/card-exclusive/CardExclusive';
import Image, { StaticImageData } from 'next/image';

import ThicknessImage from '../../../../assets/images/introductions/thickness.jpg';
import GlossImage from '../../../../assets/images/introductions/gloss.jpg';
import QuvImage from '../../../../assets/images/introductions/QUV.jpg';
import WarrantyImage from '../../../../assets/images/introductions/warranty.jpg';

import ThicknessIcon from '../../../../assets/icons/new/introduction/thickness.png';
import GlossIcon from '../../../../assets/icons/new/introduction/gloss.png';
import QuvIcon from '../../../../assets/icons/new/introduction/quv.png';
import WarrantyIcon from '../../../../assets/icons/new/introduction/warranty-simple-spec.png';
import OfficeSlider from '@/shared/components/office-slider/OfficeSlider';
import R1 from '../../../../assets/images/products/R1.jpg';
import R2Matte from '../../../../assets/images/products/R2-Matte.jpg';
import R2Pro from '../../../../assets/images/products/R2-PRO.jpg';
import R3Pro from '../../../../assets/images/products/R3-PRO.jpg';
import R4Pro from '../../../../assets/images/products/R4-PRO.jpg';
import { useTranslations } from 'next-intl';
import SectionWrapper from '@/shared/components/section-wrapper/SectionWrapper';
import { unstable_noStore as NoStore } from 'next/cache';

interface ProductPageUIProps {
  data: any;
}

const ProductPageUI = ({ data }: ProductPageUIProps) => {
  NoStore();
  const t = useTranslations('ProductRodimPage');

  // Map product codes to images
  const productImages: Record<string, StaticImageData> = {
    'RODIM R1': R1,
    'RODIM R2 MATTE': R2Matte,
    'RODIM R2 PRO': R2Pro,
    'RODIM R3 PRO': R3Pro,
    'RODIM R4 PRO': R4Pro,
  };

  const normalizedCode = data.code?.toUpperCase() || '';
  const imgSrc: StaticImageData | string = productImages[normalizedCode] || '/image/placeholder-image.png';

  return (
    <SectionWrapper>
      <section className="w-full h-[52rem] lg:h-[80rem] relative overflow-hidden rounded-[18px]">
        <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

        <Image
          src={imgSrc}
          alt="hero image"
          width={1394}
          height={800}
          // fill
          className={`absolute z-[1] object-cover ${data.code.toUpperCase() == 'RODIM R2 MATTE' ? 'transform scale-[101%]' : ''}`}
          // className={`object-cover absolute z-[1] ${data.code?.toUpperCase() === 'RODIM R2 MATTE' ? 'scale-[101%]' : ''}`}
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
            subtitle={`${data.thickness}` || ''}
          />
          <CardExclusive
            image={GlossImage}
            icon={GlossIcon}
            title="Gloss (60°)"
            subtitle={`${data.gloss}` || ''}
          />
          <CardExclusive
            image={QuvImage}
            icon={QuvIcon}
            title="QUV"
            subtitle={`${data.quv} ${t('hour')}` || ''}
          />
          <CardExclusive
            image={WarrantyImage}
            icon={WarrantyIcon}
            title="Warranty"
            subtitle={`${data.warranty} ${t('year')}` || ''}
          />
        </div>
      </section>

      <OfficeSlider title={t('globalGallery')} />
    </SectionWrapper>
  );
};

export default ProductPageUI;
