'use client';

import React from 'react';
import ElegantIcon from '../../../../assets/icons/elegant.png';
import ElegantImage from '../../../../assets/images/feel-the-difference/elegant.jpg';
import DurabilityIcon from '../../../../assets/icons/durability.png';
import DurabilityImage from '../../../../assets/images/feel-the-difference/durability.jpg';

import AdhesionIcon from '../../../../assets/icons/adhesion.png';
import AdhesionImage from '../../../../assets/images/feel-the-difference/adhesion.jpg';

import WarrantyIcon from '../../../../assets/icons/certificate.png';
import WarrantyImage from '../../../../assets/images/feel-the-difference/warranty.jpg';

import PabrikBASF2 from '../../../../assets/images/banners/pabrik-basf-2.jpg';
import GlobalIcon from '../../../../assets/icons/global.png';

import CardFeelTheDifference from '@/shared/components/card-feel-the-difference/CardFeelTheDifference';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

const ProductFeelDifferencePageUI = () => {
  const t = useTranslations('ProductRodimPage');

  return (
    <div className="p-[16px] max-w-[144rem] mx-auto flex flex-col gap-[1.6rem]">
      <section className="w-full h-[52rem] lg:h-[80rem] relative overflow-hidden rounded-[18px]">
        <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

        <Image
          src={PabrikBASF2}
          alt="hero image"
          width={0}
          height={0}
          className="w-full h-full absolute z-[1] object-cover"
          priority
        />

        <div className="flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] pb-[24px]">
          <div className="flex flex-col">
            <div className="text-[40px] font-[700] lg:text-[7.2rem]">
              A brand of BASF:
            </div>
            <div className="text-[40px] font-[700] lg:text-[7.2rem] flex gap-[2rem] items-center">
              <Image
                src={GlobalIcon}
                alt=""
                width={58}
                height={58}
                className="aspect-square"
              />

              <span>The Global Leader in TPU</span>
            </div>
          </div>

          <p className="text-[1.4rem] lg:text-[2.1rem]">
            The world leading TPU manufacturer
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-[1.6rem]">
        <CardFeelTheDifference
          image={ElegantImage}
          icon={ElegantIcon}
          title={t('FeelDifference.title1')}
          subtitle=""
          detail={t('FeelDifference.desc1')}
          discoverLabel={t('FeelDifference.discoverLabel')}
          closeLabel={t('FeelDifference.closeLabel')}
          isWide={true}
        />

        <div className="flex flex-col lg:flex-row gap-[1.6rem]">
          <CardFeelTheDifference
            image={DurabilityImage}
            icon={DurabilityIcon}
            title={t('FeelDifference.title2')}
            subtitle={t('FeelDifference.subtitle2')}
            detail={t('FeelDifference.desc2')}
            discoverLabel={t('FeelDifference.discoverLabel')}
            closeLabel={t('FeelDifference.closeLabel')}
            isWide={false}
          />

          <CardFeelTheDifference
            image={AdhesionImage}
            icon={AdhesionIcon}
            title={t('FeelDifference.title3')}
            subtitle={t('FeelDifference.subtitle3')}
            detail={t('FeelDifference.desc3')}
            discoverLabel={t('FeelDifference.discoverLabel')}
            closeLabel={t('FeelDifference.closeLabel')}
            isWide={false}
          />
        </div>

        <CardFeelTheDifference
          image={WarrantyImage}
          icon={WarrantyIcon}
          title={t('FeelDifference.title4')}
          subtitle={t('FeelDifference.subtitle4')}
          detail={t('FeelDifference.desc4')}
          discoverLabel={t('FeelDifference.discoverLabel')}
          closeLabel={t('FeelDifference.closeLabel')}
          isWide={true}
        />
      </section>
    </div>
  );
};

export default ProductFeelDifferencePageUI;
