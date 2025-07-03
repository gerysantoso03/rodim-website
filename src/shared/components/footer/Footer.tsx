import Image from 'next/image';
import LogoRodim from '../../../assets/logos/logo-rodim.svg';
import IconMapPin from '../../../assets/icons/map-pin.svg';
import IconTime from '../../../assets/icons/time.svg';
import IconMail from '../../../assets/icons/mail.svg';
import IconPhone from '../../../assets/icons/phone.svg';
import IconTiktok from '../../../assets/icons/tiktok.svg';
import IconInstagram from '../../../assets/icons/instagram.svg';
import IconWhatsapp from '../../../assets/icons/whatsapp.svg';
import IconTokopedia from '../../../assets/icons/tokopedia.png';
import IconShopee from '../../../assets/icons/shopee.png';
import IconBliBli from '../../../assets/icons/bli-bli.png';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <div className="bg-black text-white">
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
                  <div className="flex gap-[8px] items-start">
                    <Image src={IconMapPin} alt="" width={18} height={20} />
                    <p>
                      RODIM Experience Center Jl. Siantar No.7, RT.4/RW.2,
                      Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah
                      Khusus Ibukota Jakarta 10150
                    </p>
                  </div>

                  <div className="flex gap-[8px] items-start">
                    <Image src={IconTime} alt="" width={18} height={20} />
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
                  <div className="flex gap-[8px] items-start">
                    <Image src={IconMail} alt="" width={18} height={20} />
                    <p>info@basfrodim.id</p>
                  </div>

                  <div className="flex gap-[8px] items-start">
                    <Image src={IconPhone} alt="" width={18} height={20} />
                    <p>+62 822-2222-2222</p>
                  </div>
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
            <div className="h-[17px] min-w-[17px] flex items-center justify-center">
              <Image src={IconTiktok} alt="" />
            </div>
            <div className="h-[17px] min-w-[17px] flex items-center justify-center">
              <Image src={IconInstagram} alt="" />
            </div>
            <div className="h-[17px] min-w-[17px] flex items-center justify-center">
              <Image src={IconWhatsapp} alt="" />
            </div>
            <div className="h-[17px] min-w-[17px] flex items-center justify-center">
              <Image src={IconTokopedia} alt="" />
            </div>
            <div className="h-[17px] min-w-[17px] flex items-center justify-center">
              <Image src={IconShopee} alt="" />
            </div>
            <div className="h-[17px] min-w-[17px] flex items-center justify-center">
              <Image src={IconBliBli} alt="" />
            </div>
          </div>

          <span>©{new Date().getFullYear()} RODIM. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
