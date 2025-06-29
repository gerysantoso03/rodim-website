import Image, { StaticImageData } from 'next/image';
import HeroImage from '../../../assets/images/banners/hero.jpg';
import AboutHeroImage1 from '../../../assets/images/abouts/about-banner.jpg';
import AboutHeroImage2 from '../../../assets/images/abouts/pabrik-basf.jpg';
import WarrantyHeroImage from '../../../assets/images/warranties/basf-panasonic.jpg';

import { cn } from '@/shared/libs/shadcn/utils';

type CardProductProps = {
  image: StaticImageData | string;
  bannerFor: string;
  classname?: string;
};

const Banner = ({ image, bannerFor, classname }: CardProductProps) => {
  const imageSwitcher = () => {
    switch (bannerFor) {
      case 'home':
        return HeroImage;
        break;
      case 'feelDifference':
        return HeroImage;
        break;
      case 'aboutHeroImage1':
        return AboutHeroImage1;
        break;
      case 'aboutHeroImage2':
        return AboutHeroImage2;
        break;
      case 'warranty':
        return WarrantyHeroImage;
        break;
      case 'gallery':
        return HeroImage;
        break;
      default:
        return image ? image : HeroImage;
        break;
    }
  };

  return (
    <section className="w-full h-[52rem] lg:h-[80rem] relative overflow-hidden rounded-[18px]">
      <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

      <Image
        src={imageSwitcher()}
        alt="hero image"
        width={0}
        height={0}
        className={cn('w-full h-full absolute z-[1] object-cover', classname)}
        priority
      />

      {bannerFor == 'home' && (
        <div className="flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] pb-[24px]">
          <h1 className="text-[40px] font-[700] lg:text-[7.2rem]">
            RODIM {'-'} Protection by World{"'"}s Best
          </h1>
          <p className="text-[1.4rem] lg:text-[2.1rem]">
            RODIM PPF adalah brand dari BASF, pemimpin global material TPU, cat
            otomotif OEM dan refinish. Dari produksi TPU hingga inovasi PPF yang
            canggih, RODIM PPF memberikan solusi lengkap dan sangat memahami
            cara melindungi cat mobil.
          </p>
        </div>
      )}
    </section>
  );
};

export default Banner;
