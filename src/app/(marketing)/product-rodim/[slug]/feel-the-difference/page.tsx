'use client';
import { useEffect } from 'react';
import Banner from '@/shared/components/banner/Banner';
import ElegantIcon from '../../../../../assets/icons/elegant.png';
import ElegantImage from '../../../../../assets/images/feel-the-difference/elegant.jpg';
import DurabilityIcon from '../../../../../assets/icons/durability.png';
import DurabilityImage from '../../../../../assets/images/feel-the-difference/durability.jpg';

import AdhesionIcon from '../../../../../assets/icons/adhesion.png';
import AdhesionImage from '../../../../../assets/images/feel-the-difference/adhesion.jpg';

import WarrantyIcon from '../../../../../assets/icons/certificate.png';
import WarrantyImage from '../../../../../assets/images/feel-the-difference/warranty.jpg';

import PabrikBASF2 from '../../../../../assets/images/banners/pabrik-basf-2.jpg';
import GlobalIcon from '../../../../../assets/icons/global.png';

import CardFeelTheDifference from '@/shared/components/card-feel-the-difference/CardFeelTheDifference';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  // const product = products.find(p => p.productUrl.split('/').pop() === params.slug);
  // if (!product) return '';

  useEffect(() => {
    console.log('params = ', params);
  }, []);

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
          title="Tampil Elegan, Tetap Terlindungi"
          subtitle=""
          detail="PPF kami dirancang untuk memberikan perlindungan menyeluruh sekaligus mempertahankan estetika kendaraan dalam jangka panjang, dengan pilihan finishing glossy atau matte."
          isWide={true}
        />

        <div className="flex flex-col lg:flex-row gap-[1.6rem]">
          <CardFeelTheDifference
            image={DurabilityImage}
            icon={DurabilityIcon}
            title="Daya Tahan"
            subtitle="Ingin perlindungan yang tahan lama? RODIM PPF adalah jawabannya."
            detail="RODIM PPF dirancang untuk memberikan ketahanan yang lebih unggul dibandingkan PPF lainnya. Dengan layanan garansi yang kami berikan, kami memastikan bahwa produk kami mampu memberikan perlindungan optimal terhadap risiko jalanan dan kondisi cuaca yang berubah setiap hari."
            isWide={false}
          />

          <CardFeelTheDifference
            image={AdhesionImage}
            icon={AdhesionIcon}
            title="Perekat"
            subtitle="Daya rekat unggul dari BASF, melekat sempurna tanpa risiko merusak cat."
            detail="Teknologi perekat RODIM PPF merupakan bagian dari inovasi material BASF. Dengan pemahaman mendalam dan keahlian dalam cat otomotif kami menjamin perlindungan menyeluruh tanpa khawatir merusak cat kendaraan Anda."
            isWide={false}
          />
        </div>

        <CardFeelTheDifference
          image={WarrantyImage}
          icon={WarrantyIcon}
          title="Garansi"
          subtitle="Dengan pengalaman lebih dari 150 tahun, anda mendapatkan garansi dari merek terpercaya di dunia."
          detail="RODIM adalah brand yang dimiliki oleh BASF—perusahaan kimia global dengan pengalaman lebih dari 150 tahun, memberikan perlindungan yang tahan lama dan terbukti efektif. Kami menjamin tidak ada retak, residu lem, atau menguning. Memastikan kendaraan anda selalu tampil seperti baru. Jika ada kendala pada produk PPF, kami akan menggantinya secara gratis. Percayakan perlindungan jangka panjang yang terpercaya dari RODIM PPF."
          isWide={true}
        />
      </section>
    </div>
  );
};

export default Page;
