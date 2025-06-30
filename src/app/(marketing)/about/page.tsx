import Banner from '@/shared/components/banner/Banner';
import { cn } from '@/shared/libs/shadcn/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  const t = useTranslations("HomePage")

  const verticalIntegrationCards = [
    {
      image: '/image/about/business-segment-materials.jpg',
      alt: 'Business Segment Materials',
      title: 'Materials',
      description: 'Performace . Materials . Monomers',
    },
    {
      image: '/image/about/business-segment-chemicals.jpg',
      alt: 'Business Segment Chemicals',
      title: 'Chemicals',
      description: 'Petrochemicals . Intermediates',
    },
    {
      image: '/image/about/business-segment-nutrition-care.jpg',
      alt: 'Business Segment Nutrition Care',
      title: 'Nutrition & Care',
      description: 'Care Chemicals . Nutrition & Health',
    },
    {
      image: '/image/about/surface-technologies.png',
      alt: 'Surface Technologies',
      title: 'Surface Technologies',
      description: 'Catalysts . Coatings',
    },
    {
      image: '/image/about/business-segment-industrial-solutions.jpg',
      alt: 'Business Segment Industrial Solutions',
      title: 'Industrial Solutions',
      description: 'Dispensations & Resins . Performance',
    },
    {
      image: '/image/about/agricultural_solutions.jpg',
      alt: 'Agricultural Solutions',
      title: 'Agricultural Solutions',
      description: '', // Invisible description (same effect as placeholder)
    },
  ];

  const innovationCardsGroup1 = [
    {
      title: 'Manufacturing Bases Worldwide',
      description:
        'Manufaktur TPU terintegrasi milik BASF telah memenuhi standar strategi pembangunan berkelanjutan.',
      image: '/image/about/manufacturing bases worldwide.PNG',
      alt: 'Manufacturing Bases Worldwide',
    },
    {
      title: 'Quality Control at The Source',
      description:
        'Bahan baku TPU diproduksi dari pabrik BASF di Jerman, memastikan kualitas yang istimewa dan ketersediaan yang konsisten.',
      image: '/image/about/quality-control-at-the-source.jpg',
      alt: 'Quality Control At The Source',
    },
  ];

  const innovationCardsGroup2 = [
    {
      title: 'High Quality German DNA',
      description:
        'Merek RODIM mewarisi standar Jerman yang ketat untuk kualitas dan keandalan.',
      image: '/image/about/high quality german dna.png',
      alt: 'High Quality German DNA',
    },
    {
      title: 'One-stop service',
      description:
        'Jaringan penjualan yang terpercaya memberikan rasa tenang dan kenyamanan.',
      image: '/image/about/one stop service.png',
      alt: 'One Stop Service',
    },
    {
      title: 'Custom-made',
      description: 'RODIM PPF memenuhi kebutuhan individu pemilik kendaraan.',
      image: '/image/about/custom made.jpg',
      alt: 'Custom Made',
    },
  ];

  const innovationCardsGroup3 = [
    {
      title: 'First choice of Hi-tech Industries',
      description:
        'Lapisan film tipis berteknologi tinggi saat ini digunakan di berbagai bidang seperti dirgantara, konstruksi, bionik, energi baru dan lainnya.',
      image: '/image/about/first-choice-of-high-tech-industries.png',
      alt: 'First Choice of High Tech Industries',
    },
    {
      title: 'Advanced Craft',
      description:
        'Diproduksi di lini produksi pelapis film berstandar kelas dunia, melalui 10 prosedur dan 20 tes deteksi, RODIM PPF memberikan perlindungan bodi kendaraan yang canggih.',
      image: '/image/about/Advanced Craft baru.JPG',
      alt: 'Advance Craft',
    },
  ];

  const paintProtectionItems = [
    {
      title: 'Expert Installation Services',
      description:
        'Setiap pemasangan dilakukan dengan ketelitian tinggi oleh para profesional untuk menghasilkan detil yang sempurna.',
    },
    {
      title: 'Durable Protection Film',
      description:
        'Lebih dari sekadar perlindungan, RODIM PPF menawarkan ketahanan yang luar biasa dalam jangka panjang dari berbagai tantangan.',
    },
    {
      title: 'Custom Fit Solutions',
      description:
        'RODIM PPF dirancang dengan kemudahan dalam proses instalasi mengikuti lekukan kendaraan anda.',
    },
  ];



  return (
    <main className="about">
      {/* About Banner */}
      <section className="section-wrapper relative" id="aboutBanner1">
        <Banner
          image={''}
          bannerFor="aboutHeroImage1"
          classname="object-[100%_0]"
        />

        <div className="absolute bottom-[5rem] md:bottom-[8rem] left-[4rem] md:left-[8rem] flex flex-col items-start z-[2]">
          <p className="font-normal text-[1.6rem] md:text-[2.4rem] tracking-[0.023rem] leading-[2.9rem] md:leading-[100%]">
            Tentang BASF RODIM {t('title')}
          </p>
          <h1 className="font-bold leading-[100%] md:leading-[11rem] tracking-[-0.22rem] text-[4rem] md:text-[10.8rem] w-[60%] md:w-[80%]">
            Protection by World’s Best
          </h1>
        </div>
      </section>

      {/* About Info 1 */}
      <section
        id="aboutInfo1"
        className="section-wrapper md:h-[68rem] flex items-center justify-center"
      >
        <p className="text-center text-[2.4rem] md:text-[3.2rem] font-normal leading-[4rem] tracking-[0.02rem] px-[2rem] md:px-[4rem] py-[6rem] md:py-0">
          RODIM adalah brand dari BASF selama lebih dari 40 tahun, dengan
          komitmen terhadap kualitas dan inovasi serta dukungan teknologi dan
          pengalaman BASF yang lebih dari 150 tahun. Kami hadir untuk
          meningkatkan standar di industri PPF. RODIM PPF dirancang untuk
          memenuhi ekspektasi dengan memberikan perlindungan yang dapat
          diandalkan, performa yang tangguh dan ketahanan jangka panjang bagi
          pemilik kendaraan.
        </p>
      </section>

      {/* About Banner 2 */}
      <section className="section-wrapper relative" id="aboutBanner2">
        <Banner image={''} bannerFor="aboutHeroImage2" />

        <div className="absolute bottom-[5rem] md:bottom-[6rem] left-[4rem] md:left-[6rem] flex flex-col items-start justify-center z-[2]">
          <h1 className="font-bold mb-4 md:mb-0 leading-[100%] md:leading-[8rem] text-[4rem] md:text-[8rem] tracking-[-0.1rem] md:w-[80%] lg:w-[100%]">
            BASF – The Global Leader in TPU
          </h1>
          <p className="font-normal text-[1.6rem] md:text-[2.1rem] leading-[100%] md:leading-[2.9rem] tracking-[0.023rem] w-[90%] lg:w-[100%] ">
            BASF adalah perusahaan kimia terbesar di dunia yang berasal dari
            Jerman, dengan inovasi dan kemajuan teknologi yang terus berkembang.
            BASF memegang posisi sebagai produsen Thermoplastic Polyurethane
            (TPU) terbesar di dunia.
          </p>
        </div>
      </section>

      {/* About Info 2 */}
      <section
        id="aboutInfo2"
        className="section-wrapper md:h-[68rem] flex items-center justify-center"
      >
        <div className="text-center flex flex-col justify-center gap-20 px-[2rem] md:px-[12rem] py-[6rem] md:py-0">
          <p className="text-[2.4rem] md:text-[3.2rem] font-normal leading-[4rem] tracking-[0.02rem]">
            Dari butiran TPU hingga produk PPF, BASF menciptakan keunggulan
            kompetitif melalui riset dan inovasi, serta keahlian dalam produksi,
            pemasaran, penjualan dan layanan teknis.
          </p>
          <p className="text-[2.4rem] md:text-[3.2rem] font-normal leading-[4rem] tracking-[0.02rem]">
            Dengan fokus pada riset dan pengembangan teknologi material, BASF
            menjadi pemimpin global sebagai produsen terbesar lapisan film TPU
            yang menjadi komponen utama PPF. RODIM® PPF hadir sebagai hasil
            dari keahlian BASF dalam teknologi material.
          </p>
        </div>
      </section>

      {/* Paint Protection Film Otomotif Section */}
      <section id="paintProtectionFilm" className="section-wrapper">
        <div className="bg-[var(--secondary-black)] rounded-[1.8rem] flex flex-col lg:flex-row items-stretch gap-[4rem] px-[2rem] md:px-[12rem] py-[8rem] md:py-[18rem]">
          {/* Paint Protection Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/image/about/paint-protection-film.JPG"
              alt="Paint Protection Film"
              className="border-img rounded-[1.6rem] w-full h-[36rem] md:h-[42rem] object-cover object-[50%_0] md:object-[50%_-12rem] lg:w-[46.7rem] lg:h-[58.5rem] lg:object-none lg:object-center"
              width={467}
              height={585}
            />
          </div>
          {/* Paint Protection List */}
          <div className="flex-1 flex flex-col">
            <h4 className="font-bold text-[4rem] leading-[5.2rem] md:text-[4.4rem] mb-10">
              Paint Protection Film Otomotif
            </h4>
            {/* Paint Protection Items Wrapper */}
            <div className="flex flex-col justify-center gap-[5rem]">
              {paintProtectionItems.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  {/* Check Circle Icon */}
                  <div className="flex-[0.2]">
                    <Image
                      src="/image/about/check-circle-2.png"
                      alt="Check Circle"
                      width={46}
                      height={46}
                    />
                  </div>

                  {/* Paint Protection Desc */}
                  <div className="flex flex-col flex-2 gap-4">
                    <h4 className="font-bold text-[2.4rem] md:text-[3.2rem] leading-[100%]">
                      {item.title}
                    </h4>
                    <p className="font-normal text-[1.8rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* End of paint protection wrapper */}
          </div>
        </div>
      </section>

      {/* About Info 3 */}
      <section
        id="aboutInfo3"
        className="section-wrapper md:h-[68rem] flex items-center justify-center"
      >
        <div className="text-center flex flex-col justify-center gap-10 md:px-[16rem] lg:px-[24rem] py-[6rem] md:py-0">
          <h1 className="text-[4rem] md:text-[7.2rem] leading-[100%] font-bold">
            Refinish Excellence Indonesia
          </h1>
          <p className="text-[1.6rem] md:text-[1.8rem] font-normal md:leading-[2.8rem]">
            Sejak tahun 2006, Refinish Excellence Indonesia adalah agen tunggal
            pemegang merek Glasurit di Indonesia. Dengan pengalaman panjang di
            industri ini, kami memiliki keahlian dan inovasi dalam perlindungan
            cat otomotif, dengan tenaga ahli kami yang dilatih oleh BASF global
            trainer. Pemahaman kami yang mendalam tentang perlindungan cat
            otomotif memastikan kami selalu memberikan solusi terbaik.
          </p>
        </div>
      </section>

      {/* Vertical Integration Section */}
      <section id="verticalIntegration" className="section-wrapper">
        <div className="bg-[var(--secondary-black)] rounded-[1.8rem] p-[2rem] md:p-[12rem]">
          {/* Vertical Integration Title */}
          <h1 className="font-bold text-[4rem] md:text-[7.2rem] mb-4">
            Vertical Integration
          </h1>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-[2.8rem] font-normal text-left">
            Sebagai perusahaan kimia terbesar di dunia, BASF memiliki keunggulan
            mutlak dalam pengembangan PPF. Dari proses produksi TPU hingga
            perlindungan cat, integrasi vertikal yang lengkap memungkinkan BASF
            untuk memanfaatkan daya inovatif dan kontrol kualitasnya di seluruh
            rantai bisnis. Jaringan global grup ini juga menawarkan solusi yang
            paling tepat dan layanan purnajual yang komprehensif bagi mitra dan
            pelanggan.
          </p>
          {/* Vertical Integration Cards Wrapper */}
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(35rem,1fr))] gap-8 mt-[6rem]">
            {verticalIntegrationCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-[1.8rem] overflow-hidden"
              >
                <div className="w-full h-[37rem] relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-[2.8rem] bg-black">
                  <p className="font-bold text-[2.6rem]">{card.title}</p>
                  <p
                    className={`font-normal text-[1.8rem] leading-[2.8rem] ${
                      card.description ? '' : 'invisible'
                    }`}
                  >
                    {card.description || 'Placeholder'}
                  </p>
                </div>
              </div>
            ))}
          </div>{' '}
          {/* End of vertical integration cards wrapper */}
        </div>
      </section>

      {/* Innovation Leadership Section */}
      <section id="innovationLeadership" className="section-wrapper">
        <div className="md:p-[12rem]">
          {/* Innovation Leadership Title */}
          <h1 className="font-bold text-[4rem] md:text-[7.2rem] mb-[4rem]">
            Innovation Leadership
          </h1>

          {/* Group 1: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {innovationCardsGroup1.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-[1.8rem] overflow-hidden"
              >
                <div className="flex-1 p-[2.8rem] bg-[var(--secondary-black)]">
                  <p className="font-bold text-[2.2rem]">{card.title}</p>
                  <p className="font-normal text-[1.6rem] leading-[2.8rem]">
                    {card.description}
                  </p>
                </div>
                <div className="w-full h-[24rem] relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Group 2: Auto-fit Columns */}
          <div className="grid grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(30rem,1fr))] gap-4 mt-8">
            {innovationCardsGroup2.map((card, idx) => (
              <div
                key={idx}
                className={cn(
                  'flex flex-col rounded-[1.8rem] overflow-hidden',
                  idx === innovationCardsGroup2.length - 1 &&
                    innovationCardsGroup2.length % 2 !== 0
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                )}
              >
                <div className="flex-1 p-[2.8rem] bg-[var(--secondary-black)]">
                  <p className="font-bold text-[2.2rem]">{card.title}</p>
                  <p className="font-normal text-[1.6rem] leading-[2.8rem]">
                    {card.description}
                  </p>
                </div>
                <div className="w-full h-[24rem] relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className={cn(
                      'object-cover',
                      idx === innovationCardsGroup2.length - 1 &&
                        innovationCardsGroup2.length % 2 !== 0
                        ? 'object-[50%_-5rem] lg:object-[0_0]'
                        : ''
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Group 3: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {innovationCardsGroup3.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-[1.8rem] overflow-hidden"
              >
                <div className="flex-1 p-[2.8rem] bg-[var(--secondary-black)]">
                  <p className="font-bold text-[2.2rem]">{card.title}</p>
                  <p className="font-normal text-[1.6rem] leading-[2.8rem]">
                    {card.description}
                  </p>
                </div>
                <div className="w-full h-[24rem] relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Info 4 */}
      <section
        id="aboutInfo4"
        className="section-wrapper md:h-[60rem] flex items-center justify-center"
      >
        <div className="text-center flex flex-col justify-center gap-20 px-[2rem] md:px-[12rem] py-[6rem] md:py-0">
          <h1 className="text-[3.2rem] md:text-[4.8rem] font-normal md:leading-[6rem]">
            Dengan penelitian dan pengembangan yang unggul dalam teknologi
            material, BASF adalah pemimpin dunia dalam aplikasi lapisan film
            tipis berteknologi tinggi.
          </h1>
          <h1 className="text-[3.2rem] md:text-[4.8rem] font-normal md:leading-[6rem]">
            PPF RODIM merupakan hasil keahlian BASF dalam teknologi material dan
            lapisan permukaan.
          </h1>
        </div>
      </section>

      {/* About Logo */}
      <section
        id="aboutLogo"
        className="section-wrapper flex items-center justify-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-20 md:p-[10rem] lg:p-[12rem]">
          {[
            {
              src: '/image/about/01.png',
              alt: 'Protects From Flying Stones',
              label: 'Protects from Flying Stones',
            },
            {
              src: '/image/about/02.png',
              alt: 'Anti Aging',
              label: 'Anti Aging',
            },
            {
              src: '/image/about/03.png',
              alt: 'Stain and Rust Protection',
              label: 'Stain and Rust Protection',
            },
            {
              src: '/image/about/04.png',
              alt: 'Glossy or Matte Finish',
              label: 'Glossy or Matte Finish',
            },
            {
              src: '/image/about/05.png',
              alt: 'Resists Accidental Scratches',
              label: 'Resists Accidental Scratches',
            },
            {
              src: '/image/about/06.png',
              alt: 'Easy to Clean',
              label: 'Easy to Clean',
            },
            {
              src: '/image/about/07.png',
              alt: 'Self Healing',
              label: 'Self Healing',
            },
            {
              src: '/image/about/08.png',
              alt: 'Hydroponic',
              label: 'Hydroponic',
            },
            {
              src: '/image/about/09.png',
              alt: 'Anti-Corrosion',
              label: 'Anti-Corrosion',
            },
            {
              src: '/image/about/10.png',
              alt: 'Anti-yellowing',
              label: 'Anti-yellowing',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-10">
              <div className="relative w-[80px] h-[80px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full flex-1 flex items-start justify-center">
                <p className="text-center font-bold md:text-[1.8rem] lg:text-[2rem] leading-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
