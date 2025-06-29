'use client';
import Banner from '@/shared/components/banner/Banner';
import { useEffect } from 'react';
import { introductions } from '@/shared/libs/data/introductions';
import CardExclusive from '@/shared/components/card-exclusive/CardExclusive';
import RodimR2Pro from '../../../../assets/images/products/R2-PRO.jpg';
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
          src={RodimR2Pro}
          alt="hero image"
          width={0}
          height={0}
          className="w-full h-full absolute z-[1] object-cover"
          priority
        />

        <div className="flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] pb-[24px]">
          <h1 className="text-[40px] font-[700] lg:text-[7.2rem]">
            RODIM R2 PRO
          </h1>
          <p className="text-[1.4rem] lg:text-[2.1rem]">
            Professional-grade car body shield
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-[1.6rem]">
        <div className="font-bold text-[4rem] lg:text-[7.2rem] mx-auto text-center pt-[12rem] pb-[8rem]">
          Exclusive Protection
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]">
          {introductions.map((introduction, i) => (
            <CardExclusive
              key={i}
              image={introduction.image}
              icon={introduction.icon}
              title={introduction.title}
              subtitle={introduction.subtitle}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
