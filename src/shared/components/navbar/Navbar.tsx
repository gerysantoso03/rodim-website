'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LogoRodim from '../../../assets/logos/logo.svg';
import NavbarSlide from './NavbarSlide';
import NavbarSub from './NavbarSub';
import NavbarMenu from './NavbarMenu';
import { AlignJustify } from 'lucide-react';
import { products } from '@/shared/libs/data/products';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div>
        <nav className="flex justify-center bg-[#1F1F1F] text-white/80">
          <div className="w-full max-w-[1440px] gap-[50px] flex justify-between px-[16px] min-[1024px]:px-[40px] min-[1440px]:px-[120px] items-center h-[72px] text-[14px]">
            <div className="flex flex-1 min-[1440px]:flex-none">
              <button
                type="button"
                className="w-[38px] h-[38px] min-[1440px]:hidden flex justify-center items-center border border-white rounded-[8px] cursor-pointer"
                onClick={() => {
                  console.log('hallo');
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                <AlignJustify size={14} />
              </button>

              <div className="flex-1 min-[1440px]:flex-none flex justify-center items-center">
                <Link href="/">
                  <Image
                    src={LogoRodim}
                    alt="Logo Rodim"
                    width={132}
                    height={32}
                    className="min-[1440px]:w-[90px] min-[1440px]:h-[22px]"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden min-[1440px]:flex flex-1 justify-between h-full">
              <Link
                href="/"
                className={`h-full flex items-center hover:text-white transition-all duration-300 ease-in-out ${pathname === '/' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
              >
                HOME
              </Link>

              <div className="flex h-full items-center">
                {products.map((product, i) => (
                  <NavbarMenu
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    firstChild={1 === i + 1}
                    lastChild={products.length === i + 1}
                    isProduct={true}
                  />
                ))}
              </div>

              <div className="flex h-full items-center">
                <NavbarMenu
                  id={'about'}
                  title={'TENTANG BASF RODIM'}
                  firstChild={true}
                  lastChild={false}
                  isProduct={false}
                />
                <NavbarMenu
                  id={'gallery'}
                  title={'GALERI'}
                  firstChild={false}
                  lastChild={false}
                  isProduct={false}
                />
                <NavbarMenu
                  id={'warranty'}
                  title={'GARANSI'}
                  firstChild={false}
                  lastChild={true}
                  isProduct={false}
                />
              </div>
            </div>
          </div>
        </nav>

        <NavbarSlide
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          data={products}
        />
      </div>

      <NavbarSub />
    </>
  );
};

export default Navbar;
