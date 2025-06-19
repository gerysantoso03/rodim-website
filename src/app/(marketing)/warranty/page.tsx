import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WarrantyPage = () => {
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
        <div className="relative h-[58rem]">
          <Image
            src="/image/warranty/Photo 1_BASF x Panasonic.JPG"
            alt="BASF x Panasonic"
            fill
            className="border-img w-full rounded-[1.6rem] object-cover object-[0_-80px]"
          />
          <div className="absolute bottom-[4rem] left-[4rem]">
            <h1 className="font-bold leading-[8rem] text-[8rem] w-[70%]">
              Deskripsi Layanan Garansi Produk
            </h1>
          </div>
        </div>
      </section>

      {/* Warranty Info */}
      <section
        id="warrantyInfo"
        className="section-wrapper h-[68rem] flex items-center justify-center"
      >
        <p className="text-center text-[4rem] font-normal tracking-[0.02rem] px-[4rem]">
          Sebagai merek dari BASF, perusahaan kimia terbesar di dunia yang
          berdiri sejak tahun 1865, RODIM PPF berdiri di atas fondasi keunggulan
          global dan komitmen jangka panjang. Solusi perlindungan kami dibentuk
          oleh lebih dari 150 tahun inovasi, keahlian dan kepemimpinan industri.
        </p>
      </section>

      {/* Warranty Products */}
      <section className="section-wrapper" id="warrantyProducts">
        <div className="bg-[var(--secondary-black)] rounded-[1.8rem] p-[12rem]">
          {/* Warranty Products Title */}
          <p className="font-normal text-[2.4rem] leading-[2.8rem] mb-20">
            Kami memastikan tidak akan ada retakan, gelembung, residu lem yang
            merusak cat dan ppf menguning, dengan produk yang tetap jernih
            seperti baru sepanjang periode garansi. Jika terjadi masalah pada
            produk PPF, kami menawarkan penggantian gratis selama periode
            garansi. Setiap produk dijamin dengan garansi yang dapat dipercaya.
          </p>
          <h1 className="font-bold text-[4.6rem] leading-[100%] mb-20">
            Pastikan anda mendapatkan garansi dari perusahaan kelas dunia
          </h1>

          {/* Warranty Products Group 1 */}
          <div className="grid grid-cols-3 gap-4 mb-5">
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
                  Lihat produk{' '}
                  <span>
                    {' '}
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Warranty Products Group 2 */}
          <div className="grid grid-cols-2 gap-4">
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
                  Lihat produk{' '}
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
