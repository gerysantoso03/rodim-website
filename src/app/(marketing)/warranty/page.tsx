'use client';
import WarrantyHeroImage from '../../../assets/images/warranties/basf-panasonic.jpg';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SectionWrapper from '@/shared/components/section-wrapper/SectionWrapper';
import Image from 'next/image';
import OfficeSlider from '@/shared/components/office-slider/OfficeSlider';
import { getAllProductsAction } from '@/features/admin/actions/product/action';

type ProductProps = {
  id: number;
  code: string;
  slug: string | null;
  warranty?: string | null;
};

const WarrantyPage = () => {
  const [productRodim, setProductRodim] = useState<ProductProps[]>([]);
  const t = useTranslations('WarrantyPage');

  useEffect(() => {
    const getProducts = async () => {
      const product = await getAllProductsAction();

      if (!Array.isArray(product)) {
        return;
      }

      setProductRodim(product);
    };

    getProducts();
  }, []);

  return (
    <SectionWrapper>
      <section className="w-full h-[48.8rem] lg:h-[54.8rem] relative overflow-hidden rounded-[18px] ">
        <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

        <Image
          src={WarrantyHeroImage}
          alt="hero image"
          width={0}
          height={0}
          className={'w-full h-full absolute z-[1] object-cover'}
          priority
        />

        <div className="flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] lg:px-[4.6rem] pb-[24px] lg:pb-[4.6rem]">
          <h1 className="text-[40px] font-[700] lg:text-[8rem] leading-[110%]">
            {t.rich('warrantyTitle', {
              block: () => <br className="hidden xl:block" />,
            })}
          </h1>
        </div>
      </section>

      {/* Warranty Info */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="300"
        id="warrantyInfo"
        className="py-[18rem] lg:py-[24rem] px-[2rem] lg:px-[4.8rem] xl:px-[19.6rem] flex items-center justify-center"
      >
        <p className="text-center text-[3.2rem] lg:text-[4rem] font-normal tracking-[0.02rem] leading-[110%]">
          {t('warrantyDesc1')}
        </p>
      </section>

      {/* Warranty Products */}
      <section
        className="bg-[var(--secondary-black)] rounded-[1.8rem] px-[3.2rem] lg:px-[8rem] py-[6.4rem] lg:py-[12rem] xl:p-[18rem] flex flex-col gap-[6.4rem]"
        id="warrantyProducts"
      >
        <div
          className="flex flex-col gap-[4rem]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Warranty Products Title */}
          <p className="font-normal text-[2.4rem] leading-[2.8rem]">
            {t('warrantyDesc2')}
          </p>

          <h1 className="font-bold text-[4.6rem] leading-[110%]">
            {t('warrantyDesc3')}
          </h1>
        </div>

        <div className="">
          {/* Warranty Products Group 1 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-5 ">
            {productRodim.map((product, idx) => {
              const isLastTwo = idx >= productRodim.length - 2;
              const spanClass = isLastTwo ? 'lg:col-span-3' : '';

              return (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={isLastTwo ? 200 : 150}
                  className={`col-span-[2] ${spanClass} bg-gradient-to-b from-[#575757] to-70% to-[131313] rounded-[1.8rem] p-[.1rem]`}
                >
                  <div className="bg-[#131313] py-[2.2rem] px-[3rem] flex flex-col justify-start gap-[1.6rem] lg:gap-[1.8rem] rounded-[1.8rem]">
                    <div className="">
                      <p className="text-[2.2rem] font-bold">{product.code}</p>
                      <p className="text-[4rem] font-bold">
                        {product.warranty} {t('year')}
                      </p>
                    </div>

                    <Link
                      className="text-[#2A97FF] text-[1.7rem] flex items-center gap-2"
                      href={`/product-rodim/${product.slug}`}
                    >
                      {t('buttonLabel')}
                      <span>
                        {' '}
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OfficeSlider title={t('globalGallery')} />
    </SectionWrapper>
  );
};

export default WarrantyPage;
