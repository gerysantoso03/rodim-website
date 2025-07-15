'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LogoRodim from '../../../assets/logos/logo.svg';
import { X } from 'lucide-react';
import { useTranslations } from 'use-intl';

type ProductNav = {
  id: number;
  title: string;
  slug: string;
};

type NavbarSlideProps = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  data: ProductNav[];
};

const NavbarSlide = ({ isOpenMenu, setIsOpenMenu, data }: NavbarSlideProps) => {
  const t = useTranslations('Navbar');

  const pathname = usePathname();

  const segments = pathname.split('/');
  const productId = segments[2];

  return (
    <div
      className={`fixed z-[99999] inset-0 bg-black/64 backdrop-blur-2xl xl:hidden transition-all ease-in-out translate-x-[-100%] ${isOpenMenu ? 'translate-x-[0%]' : ''}`}
    >
      <div className="bg-[#1F1F1F] w-full h-full p-[2.4rem] flex flex-col gap-[1.6rem] lg:max-w-[82rem]">
        <div className="flex justify-between items-center">
          <Image src={LogoRodim} alt="Logo Rodim" width={132} height={32} />

          <button
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
            className="cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-[1.6rem]">
          <Link href="/">
            <div
              className={`hover:bg-white/10 transition-all duration-300 ease-in-out w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${pathname === '/' ? 'bg-white/10' : 'bg-transparent'}`}
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              HOME
            </div>
          </Link>

          <div className="flex flex-col gap-[.4rem]">
            <div className="flex items-center gap-[1.2rem] h-[3.2rem]">
              <span className="text-[#9BA2B0] text-[1rem]">PRODUCTS</span>
              <div className="h-[.1rem] w-full bg-[#E5E7EB]" />
            </div>
            {data.map(({ id, title, slug }, index) => {
              const idHref = slug.split('/')[2] || '';

              return (
                <Link href={`${slug}`} key={id}>
                  <div
                    className={`hover:bg-white/10 transition-all duration-300 ease-in-out w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${productId === idHref ? 'bg-white/10' : 'bg-transparent'}`}
                    onClick={() => {
                      setIsOpenMenu(!isOpenMenu);
                    }}
                  >
                    {title.toUpperCase()}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-[.4rem]">
            <div className="flex items-center gap-[1.2rem] h-[3.2rem]">
              <span className="text-[#9BA2B0] text-[1rem]">PAGES</span>
              <div className="h-[.1rem] w-full bg-[#E5E7EB]" />
            </div>
            <Link href="/about">
              <div
                className={`hover:bg-white/10 transition-all duration-300 ease-in-out w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${pathname === '/about' ? 'bg-white/10' : 'bg-transparent'}`}
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                {t('about')}
              </div>
            </Link>
            <Link href="/gallery">
              <div
                className={`hover:bg-white/10 transition-all duration-300 ease-in-out w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${pathname === '/gallery' ? 'bg-white/10' : 'bg-transparent'}`}
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                {t('gallery')}
              </div>
            </Link>
            <Link href="/warranty">
              <div
                className={`hover:bg-white/10 transition-all duration-300 ease-in-out w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${pathname === '/warranty' ? 'bg-white/10' : 'bg-transparent'}`}
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                {t('warranty')}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSlide;
