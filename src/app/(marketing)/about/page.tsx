import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AboutHeroImage1 from '../../../assets/images/abouts/about-banner.jpg';
import AboutHeroImage2 from '../../../assets/images/abouts/pabrik-basf.jpg';
import React from 'react';
import SectionWrapper from '@/shared/components/section-wrapper/SectionWrapper';
import OfficeSlider from '@/shared/components/office-slider/OfficeSlider';
import RefinishImage from '../../../assets/images/abouts/refinish.png';
import { useAbouts } from '@/shared/libs/data/useAbouts';
import { cn } from '@/shared/libs/shadcn/utils';

const AboutPage = () => {
  const t = useTranslations('AboutPage');
  const abouts = useAbouts();

  return (
    <SectionWrapper>
      {/* About Banner */}
      <section className="w-full h-[52rem] lg:h-[72rem] relative overflow-hidden rounded-[18px]">
        <div className="bg-gradient-to-r from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

        <Image
          src={AboutHeroImage1}
          alt="hero image"
          width={0}
          height={0}
          className={
            'w-full h-full absolute z-[1] object-cover object-right lg:object-[0%_18%]'
          }
          priority
        />

        <div className="flex flex-col absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] lg:px-[4.6rem] pb-[24px] lg:pb-[4.6rem]">
          <span className="text-[1.6rem] lg:text-[2.4rem]">
            {t('aboutTitle1')}
          </span>
          <h1 className="text-[40px] font-[700] lg:text-[10.8rem] leading-[110%]">
            Protection by
            <br className="hidden lg:block" /> World{"'"}s Best
          </h1>
        </div>
      </section>

      {/* About Info 1 */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="300"
        id="aboutInfo1"
        className="py-[18rem] lg:py-[24rem] px-[.8rem] lg:px-[4.8rem] xl:px-[3.6rem] flex items-center justify-center"
      >
        <p className="text-center text-[2.4rem] lg:text-[3.2rem] font-normal tracking-[0.02rem] leading-[110%]">
          {t('aboutDesc1')}
        </p>
      </section>

      {/* About Banner 2 */}
      <section
        className="w-full h-[60rem] lg:h-[80rem] relative overflow-hidden rounded-[18px]"
        data-aos="fade-up"
        data-aos-anchor-offset="200"
        data-aos-delay="300"
      >
        <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0 z-[2] to-70% opacity-80" />

        <Image
          src={AboutHeroImage2}
          alt="hero image"
          width={0}
          height={0}
          className={'w-full h-full absolute z-[1] object-cover object-bottom'}
          priority
        />

        <div className="flex flex-col gap-[12px] absolute z-[3] bottom-0 left-0 right-0 w-full text-[#F5F5F7] px-[24px] lg:px-[4.6rem] pb-[24px] lg:pb-[4.6rem]">
          <h1 className="text-[40px] font-[700] lg:text-[8rem] leading-[110%]">
            BASF - The Global
            <br className="hidden lg:block xl:hidden" /> Leader in TPU
          </h1>
          <p className="text-[1.6rem] lg:text-[2.1rem]">{t('aboutTitle2')}</p>
        </div>
      </section>

      {/* About Info 2 */}
      <section
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        id="aboutInfo2"
        className="py-[18rem] lg:py-[24rem] px-[2.4rem] lg:px-[4.8rem] xl:px-[19.6rem] flex flex-col items-center justify-center gap-[3.2rem]"
      >
        <p className="text-center text-[2.4rem] lg:text-[3.2rem] font-normal tracking-[0.02rem] leading-[110%]">
          {t('aboutDesc2')}
        </p>

        <p className="text-center text-[2.4rem] lg:text-[3.2rem] font-normal tracking-[0.02rem] leading-[110%]">
          {t('aboutDesc3')}
        </p>
      </section>

      {/* Paint Protection Film Otomotif Section */}
      <section className="bg-[#1f1f1f] rounded-[1.8rem] flex flex-col xl:flex-row gap-[4rem] lg:gap-[12rem] px-[3.2rem] py-[6.4rem] xl:py-[18rem] lg:p-[12rem]">
        {/* Paint Protection Image */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="bg-gradient-to-b from-[#575757] to-70% to-[#1f1f1f] p-[.2rem] h-[36rem] lg:h-[42rem] xl:h-[56.5rem] w-full xl:max-w-[48.7rem] rounded-[1.6rem] overflow-hidden"
        >
          <Image
            src="/image/about/paint-protection-film.JPG"
            alt="Paint Protection Film"
            className="rounded-[1.6rem] w-full h-full object-cover lg:object-[0%_20%]"
            width={467}
            height={585}
          />
        </div>

        {/* Paint Protection List */}
        <div className="flex flex-col gap-[4rem]">
          <h4 className="font-bold text-[4rem] leading-[5.2rem] lg:text-[4.4rem]">
            {t('paintProtectionTitle')}
          </h4>

          {/* Paint Protection Items Wrapper */}
          <div className="flex flex-col gap-[4rem]">
            {abouts[0].paintProtectionItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-[1.6rem]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {/* Check Circle Icon */}
                <div className="">
                  <Image
                    src="/image/about/check-circle-2.png"
                    alt="Check Circle"
                    width={40}
                    height={40}
                    className="min-w-[4rem] aspect-square"
                  />
                </div>

                {/* Paint Protection Desc */}
                <div className="flex flex-col gap-[1rem]">
                  <h4 className="font-bold text-[2.4rem] lg:text-[3.2rem] leading-[110%]">
                    {item.title}
                  </h4>
                  <p className="font-normal text-[1.8rem] text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* End of paint protection wrapper */}
        </div>
      </section>

      {/* Paint Protection Film Otomotif Section */}
      <section className="bg-transparant rounded-[1.8rem] flex flex-col xl:flex-row gap-[4rem] lg:gap-[12rem] px-[3.2rem] py-[6.4rem] xl:py-[18rem] lg:p-[12rem]">
        {/* Paint Protection Image */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-left"
          data-aos-delay="200"
          data-aos-duration="800"
          className="bg-gradient-to-b xl:flex-[1] from-[#575757] to-70% to-[#1f1f1f] p-[.2rem] h-auto w-full xl:max-w-[48.7rem] rounded-[1.6rem] overflow-hidden"
        >
          <Image
            src={RefinishImage}
            alt="Refinish"
            className="rounded-[1.6rem] w-full h-full object-cover"
            width={467}
            height={585}
          />
        </div>

        {/* Paint Protection List */}
        <div className="flex xl:flex-[1] flex-col gap-[4rem]">
          <div
            data-aos="zoom-right"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="800"
            className="flex"
          >
            <h4 className="font-bold text-[4rem] leading-[5.2rem] lg:text-[4.4rem]">
              Refinish Excellence Indonesia
            </h4>
          </div>

          <div
            className="flex flex-col gap-[4rem]"
            data-aos="zoom-right"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <p className="font-normal text-[1.8rem] text-white/80">
              {t('refinish')}
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Integration Section */}
      <section className="bg-[var(--secondary-black)] rounded-[1.8rem] px-[3.2rem] py-[6.4rem] lg:p-[12rem] flex flex-col gap-[4rem] lg:gap-[8rem]">
        <div className="flex flex-col gap-[2rem] lg:gap-[2.4rem]">
          {/* Vertical Integration Title */}
          <h1 className="font-bold text-[4rem] lg:text-[7.2rem] tracking-[-0.12rem]">
            Vertical Integration
          </h1>

          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="flex"
          >
            <p className="text-[1.6rem] lg:text-[1.8rem] font-normal">
              {t('aboutDesc5')}
            </p>
          </div>
        </div>

        {/* Vertical Integration Cards Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.6rem]">
          {abouts[0].verticalIntegrationCards.map((card, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${0 + idx * 100}`}
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              key={idx}
              className="bg-gradient-to-b from-[#575757] to-70% to-[#1f1f1f] p-[.2rem] rounded-[1.8rem]"
            >
              <div className="flex flex-col rounded-[1.8rem] overflow-hidden">
                <div className="w-full h-[33rem] lg:h-[36rem] relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-[2.8rem] bg-black min-h-[15rem] flex flex-col gap-[.6rem]">
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
            </div>
          ))}
        </div>
        {/* End of vertical integration cards wrapper */}
      </section>

      {/* Innovation Leadership Section */}
      <section className="px-[2.4rem] lg:px-[10.4rem] py-[18rem] flex flex-col gap-[6.4rem]">
        {/* Innovation Leadership Title */}
        <h1 className="font-bold text-[4rem] lg:text-[7.2rem] leading-[110%]">
          Innovation Leadership
        </h1>

        <div className="flex flex-col gap-[1.6rem]">
          {/* Group 1: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]">
            {abouts[0].innovationCardsGroup1.map((card, idx) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${0 + idx * 100}`}
                data-aos-duration="1000"
                key={idx}
                className="flex flex-col rounded-[1.8rem] overflow-hidden"
              >
                <div className="flex-[1] p-[2.8rem] bg-[var(--secondary-black)] flex flex-col gap-[.6rem] pb-[3.2rem] xl:pb-[9rem]">
                  <p className="font-bold text-[2.6rem] leading-[110%]">
                    {card.title}
                  </p>
                  <p className="font-normal text-[1.8rem] leading-[2.8rem] text-white/80">
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
          <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-[1.6rem]">
            {abouts[0].innovationCardsGroup2.map((card, idx) => {
              const lastCard =
                abouts[0].innovationCardsGroup2.length === idx + 1;

              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${0 + idx * 100}`}
                  data-aos-duration="1000"
                  key={idx}
                  className={`flex flex-col rounded-[1.8rem] overflow-hidden ${lastCard ? 'lg:col-span-[4]' : 'lg:col-span-[2]'} xl:col-auto`}
                >
                  <div className="flex-[1] p-[2.8rem] bg-[var(--secondary-black)] flex flex-col gap-[.6rem] pb-[3.2rem] xl:pb-[9rem]">
                    <p className="font-bold text-[2.6rem] leading-[110%]">
                      {card.title}
                    </p>
                    <p className="font-normal text-[1.8rem] leading-[2.8rem] text-white/80">
                      {card.description}
                    </p>
                  </div>

                  <div className="w-full h-[24rem] relative">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className={cn(
                        'object-cover lg:object-[0%_25%]',
                        idx == 0 && 'lg:object-[50%_50%]'
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Group 3: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]">
            {abouts[0].innovationCardsGroup3.map((card, idx) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${0 + idx * 100}`}
                data-aos-duration="1000"
                key={idx}
                className="flex flex-col rounded-[1.8rem] overflow-hidden"
              >
                <div className="flex-[1] p-[2.8rem] bg-[var(--secondary-black)] flex flex-col gap-[.6rem] pb-[3.2rem] xl:pb-[9rem]">
                  <p className="font-bold text-[2.6rem] leading-[110%]">
                    {card.title}
                  </p>
                  <p className="font-normal text-[1.8rem] leading-[2.8rem] text-white/80">
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
        data-aos="zoom-right"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="1000"
        id="aboutInfo4"
        className="py-[9rem] px-[2.4rem] lg:px-[10.4rem] xl:px-[16.4rem] flex flex-col items-center justify-center gap-[3.2rem] lg:gap-[5rem]"
      >
        <p className="text-center text-[3.2rem] font-bold lg:text-[4.8rem] tracking-[-0.08rem] leading-[110%]">
          {t('aboutDesc6')}
        </p>

        <p className="text-center text-[3.2rem] font-bold lg:text-[4.8rem] tracking-[-0.08rem] leading-[110%]">
          {t('aboutDesc7')}
        </p>
      </section>

      {/* About Logo */}
      <section className="grid grid-cols-2 lg:grid-cols-5 px-[.8rem] lg:px-[4.8rem] xl:px-[16.4rem] lg:pt-[9rem] pb-[14rem] lg:pb-[9rem]">
        {abouts[0].logos.map((item, idx) => (
          <div
            data-aos="zoom-out-up"
            data-aos-delay={idx * 100}
            key={idx}
            className={`flex flex-col items-center gap-[1.2rem] mb-[4rem] lg:mb-[9rem]`}
          >
            <div className="relative w-[80px] h-[80px] aspect-square">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="w-full flex-1 flex items-start px-[1rem] justify-center">
              <p className="text-center font-bold text-[2rem] lg:text-[2.2rem] leading-[110%]">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </section>

      <OfficeSlider title={t('globalGallery')} />
    </SectionWrapper>
  );
};

export default AboutPage;
