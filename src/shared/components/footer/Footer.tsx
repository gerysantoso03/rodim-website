import Image from 'next/image';
import Link from 'next/link';
import LogoRodim from '../../../assets/logos/logo-rodim.svg';
import { Phone, Mail, MapPin, Clock9 } from 'lucide-react';
import { retailers } from '@/shared/libs/data/retailers';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-black text-white">
      <div className="py-[64px] flex flex-col gap-[20px] max-w-[1200px] mx-auto">
        <div className="px-[40px] min-[1440px]:px-0 flex flex-col gap-[40px] min-[1024px]:gap-[102px] pb-[40px] min-[1024px]:pb-[100px] border-b border-b-white/12">
          <div className="flex justify-start min-[1024px]:justify-center">
            <Image
              src={LogoRodim}
              alt="Logo Rodim"
              width={180}
              height={60}
              className="min-[1024px]:w-[212px] min-[1024px]:h-[70px]"
            />
          </div>

          <div className="flex flex-col min-[1024px]:flex-row gap-[40px] min-[1024px]:gap-[120px]">
            <div className="flex flex-1 flex-col gap-[40px] min-[1440px]:max-w-[520px]">
              <div className="flex flex-col gap-[8px]">
                <span className="font-[700] uppercase">
                  {t('installation')}
                </span>

                <div className="flex flex-col gap-[8px]">
                  <Link
                    href="https://www.google.com/maps/place/RODIM+Experience+Center/@-6.1734057,106.8047831,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f70032cb6bfd:0x80b33f30b3a138ed!8m2!3d-6.173411!4d106.807358!16s%2Fg%2F11x7d86_qt?entry=tts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit"
                  >
                    <div className="flex gap-[8px] items-start">
                      <MapPin size={18} className="min-w-[1.8rem]" />
                      <p>
                        RODIM Experience Center Jl. Siantar No.7, RT.4/RW.2,
                        Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah
                        Khusus Ibukota Jakarta 10150
                      </p>
                    </div>
                  </Link>

                  <div className="flex gap-[8px] items-start">
                    <Clock9 size={18} className="min-w-[1.8rem]" />
                    <p>
                      {t('monday')} - {t('friday')}: 9.00 - 17.00 |{' '}
                      {t('saturday')}: 9.00-15.00 | {t('sunday')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <span className="font-[700] uppercase">{t('contact')}</span>

                <div className="flex flex-col gap-[8px]">
                  <Link href="mailto:info@basfrodim.id" className="w-fit">
                    <div className="flex gap-[8px] items-center">
                      <Mail size={18} className="min-w-[1.8rem]" />
                      <p>info@basfrodim.id</p>
                    </div>
                  </Link>

                  <Link href="tel:+6282213959045" className="w-fit">
                    <div className="flex gap-[8px] items-center">
                      <Phone size={18} className="min-w-[1.8rem]" />
                      <p>+62 822-1395-9045</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-[8px] max-w-[304px] min-[1440px]:max-w-none">
              <span className="font-[700]">Support Services</span>

              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[8px] items-start">
                  <Link href="/faq">FAQ</Link>
                </div>

                <div className="flex gap-[8px] items-start">
                  <Link href="/care-instruction">Care Instruction</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] min-[1024px]:gap-[34px] items-center justify-center">
          <div className="flex gap-[20px]">
            {retailers.map((retailer) => (
              <Link href={retailer.url} key={retailer.title}>
                <div className="h-[17px] min-w-[17px] flex items-center justify-center">
                  <Image src={retailer.image} alt={retailer.title} />
                </div>
              </Link>
            ))}
          </div>

          <span>©{new Date().getFullYear()} RODIM. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
