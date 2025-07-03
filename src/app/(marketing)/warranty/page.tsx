import Banner from '@/shared/components/banner/Banner';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const WarrantyPage = () => {
  const t = useTranslations('WarrantyPage');

  const warrantyProductsGroup1 = [
    {
      name: 'Rodim R4 Pro',
      year: '10 tahun',
    },
    {
      name: 'Rodim R3 Pro',
      year: '10 tahun',
    },
    {
      name: 'Rodim R2 Pro',
      year: '10 tahun',
    },
  ];

  const warrantyProductsGroup2 = [
    {
      name: 'Rodim R2 Matte',
      year: '10 tahun',
    },
    {
      name: 'Rodim R1',
      year: '7 tahun',
    },
  ];

  return (
    <main className="warranty">
      {/* Warranty Banner */}
      <section className="section-wrapper" id="warrantyBanner">
        <div className="relative">
          <Banner image={''} bannerFor="warranty" />
          <div className="absolute bottom-[4rem] left-[2rem] md:left-[4rem] z-[2]">
            <h1 className="font-bold leading-[100%] md:leading-[8rem] text-[4rem] md:text-[8rem] md:w-[70%]">
              {t('warrantyTitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Warranty Info */}
      <section
        id="warrantyInfo"
        className="section-wrapper md:h-[68rem] flex items-center justify-center"
      >
        <p className="text-center text-[3rem] md:text-[4rem] font-normal tracking-[0.02rem] md:px-[4rem] py-[6rem] md:py-0">
          {t('warrantyDesc1')}
        </p>
      </section>

      {/* Warranty Products */}
      <section className="section-wrapper" id="warrantyProducts">
        <div className="bg-[var(--secondary-black)] rounded-[1.8rem] p-[4rem_2rem] md:p-[12rem]">
          {/* Warranty Products Title */}
          <p className="font-normal text-[2.4rem] leading-[2.8rem] mb-20">
            {t('warrantyDesc2')}
          </p>
          <h1 className="font-bold text-[4.6rem] md:leading-[100%] mb-20">
            {t('warrantyDesc3')}
          </h1>

          {/* Warranty Products Group 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {warrantyProductsGroup1.map((card, idx) => (
              <div
                className="rounded-[1.8rem] bg-black/40 py-[2.2rem] px-[3rem] flex flex-col justify-start"
                key={idx}
              >
                <p className="text-[2rem] font-bold">{card.name}</p>
                <p className="text-[3rem] font-bold">{card.year}</p>
                <Link
                  className="text-primary-blue text-[1.4rem] flex items-center gap-2 mt-4"
                  href=""
                >
                  {t('buttonLabel')}
                  <span>
                    {' '}
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Warranty Products Group 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warrantyProductsGroup2.map((card, idx) => (
              <div
                className="rounded-[1.8rem] bg-black/40 py-[2.2rem] px-[3rem] flex flex-col justify-start"
                key={idx}
              >
                <p className="text-[2rem] font-bold">{card.name}</p>
                <p className="text-[3rem] font-bold">{card.year}</p>
                <Link
                  className="text-primary-blue text-[1.4rem] flex items-center gap-2 mt-4"
                  href=""
                >
                  {t('buttonLabel')}
                  <span>
                    {' '}
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WarrantyPage;
