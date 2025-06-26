'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoRodim from '../../../assets/logos/logo.svg';
import IconList from '../../../assets/icons/list.svg';
import CarIcon from "../../../assets/icons/car.svg"
import GitCompareIcon from "../../../assets/icons/git-compare.svg"
import WrenchIcon from "../../../assets/icons/wrench.svg"
import { ChevronDown, X, AlignJustify } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  // Pisah path menjadi array: ['', 'product', '1', 'specification']
  const segments = pathname.split('/')
  const page = segments[1]
  const productId = segments[2] // '1'
  const subPage = segments[3] || '' // bisa 'feel-the-difference', 'specification', atau kosong untuk pengenalan

  const isActive = (check: string) => subPage === check

  useEffect(() => {
    console.log('path = ', segments[1])
    if (dropdownRef.current) {
      if (isOpen) {
        const scrollHeight = dropdownRef.current.scrollHeight;
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight('0px');
      }
    }
  }, [isOpen]);

  return (
    <div className='flex flex-col'>
      <nav className="flex justify-center bg-[#1F1F1F] text-white/80">
        <div className="w-full max-w-[1440px] gap-[50px] flex justify-between px-[16px] min-[1024px]:px-[40px] min-[1440px]:px-[120px] items-center h-[72px] text-[14px]">
          <div className="flex flex-1 min-[1440px]:flex-none">
            <button
              type="button"
              className="w-[38px] h-[38px] min-[1440px]:hidden flex justify-center items-center border border-white rounded-[8px] cursor-pointer"
              onClick={() => {
                console.log('hallo')
                setIsOpenMenu(!isOpenMenu)
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
              className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
            >
              HOME
            </Link>

            <div className="flex h-full items-center">
              <div className="h-full relative pl-0 px-[12px] flex items-center">
                <Link
                  href="/rodim-r1"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/rodim-r1' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  RODIM R1
                </Link>
                <div className="h-[20px] border-r border-white/80 absolute right-0" />
              </div>

              <div className="h-full relative px-[12px] flex items-center">
                <Link
                  href="/rodim-r2-matte"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/rodim-r2-matte' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  RODIM R2 MATTE
                </Link>
                <div className="h-[20px] border-r border-white/80 absolute right-0" />
              </div>

              <div className="h-full relative px-[12px] flex items-center">
                <Link
                  href="/rodim-r2-pro"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/rodim-r2-pro' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  RODIM R2 PRO
                </Link>
                <div className="h-[20px] border-r border-white/80 absolute right-0" />
              </div>

              <div className="h-full relative px-[12px] flex items-center">
                <Link
                  href="/rodim-r3-pro"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/rodim-r3-pro' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  RODIM R3 PRO
                </Link>
                <div className="h-[20px] border-r border-white/80 absolute right-0" />
              </div>

              <div className="h-full relative px-[12px] pr-0 flex items-center">
                <Link
                  href="/rodim-r4-pro"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/rodim-r4-pro' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  RODIM R4 PRO
                </Link>
                <div className="h-[20px] absolute right-0" />
              </div>
            </div>

            <div className="flex h-full items-center">
              <div className="h-full relative pl-0 px-[12px] flex items-center">
                <Link
                  href="/about"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/about' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  TENTANG BASF RODIM
                </Link>
                <div className="h-[20px] border-r border-white/80 absolute right-0" />
              </div>

              <div className="h-full relative px-[12px] flex items-center">
                <Link
                  href="/"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  GALERI
                </Link>
                <div className="h-[20px] border-r border-white/80 absolute right-0" />
              </div>

              <div className="h-full relative px-[12px] pr-0 flex items-center">
                <Link
                  href="/warranty"
                  className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/warranty' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
                >
                  GARANSI
                </Link>
                <div className="h-[20px] absolute right-0" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {(page && page === "product-rodim") && (
        <div className="bg-[#1F1F1F] text-white/80 relative">
          <div className="w-full max-w-[1440px] mx-auto min-h-[5.2rem] flex px-[16px] min-[1024px]:px-[40px] min-[1440px]:px-[120px] text-[14px]">
            <div className="text-[2rem] font-bold flex justify-between w-full flex-[1]">
              <div className="h-full flex items-center">
                <span>RODIM R2 PRO</span>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen((prev : boolean) => !prev)}
                className="transition-transform duration-[0.3s] cursor-pointer lg:hidden"
              >
                <ChevronDown
                  className={`transform transition-transform duration-[0.3s] ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <div className="gap-[2.4rem] text-[1.4rem] hidden lg:flex">
                <Link href="/product-rodim/1">
                  <div className={`h-full flex items-center gap-[.4rem] font-bold ${subPage === '' ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}>
                    <Image 
                      src={CarIcon}
                      alt=''
                      width={0}
                      height={0}
                    />
                    <span>Pengenalan</span>
                  </div>
                </Link>

                <Link href="/product-rodim/1/feel-the-difference">
                  <div className={`h-full flex items-center gap-[.4rem] font-bold ${isActive('feel-the-difference') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}>
                    <Image 
                      src={GitCompareIcon}
                      alt=''
                      width={0}
                      height={0}
                    />
                    <span>Feel the Difference with RODIM PPF</span>
                  </div>
                </Link>

                <Link href="/product-rodim/1/specification">
                  <div className={`h-full flex items-center gap-[.4rem] font-bold ${isActive('specification') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}>
                    <Image 
                      src={WrenchIcon}
                      alt=''
                      width={0}
                      height={0}
                    />
                    <span>Spesifikasi Teknis</span>
                  </div>
                </Link>
              </div>
            </div>

            <div
              ref={dropdownRef}
              style={{
                height: height,
                overflow: 'hidden',
                transition: 'height 0.3s ease',
              }}
              className="absolute bg-[#1F1F1F] z-10 w-full left-0 top-[100%] right-0 px-[1.6rem]"
            >
              <div className="py-[1.2rem]">
                <Link href="/product-rodim/1">
                  <div className={`min-h-[5.6rem] flex items-center gap-[.4rem] font-bold ${subPage === '' ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}>
                    <Image 
                      src={CarIcon}
                      alt=''
                      width={0}
                      height={0}
                    />
                    <span>Pengenalan</span>
                  </div>
                </Link>
                <Link href="/product-rodim/1/feel-the-difference">
                  <div className={`min-h-[5.6rem] flex items-center gap-[.4rem] font-bold ${isActive('feel-the-difference') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}>
                    <Image 
                      src={GitCompareIcon}
                      alt=''
                      width={0}
                      height={0}
                    />
                    <span>Feel the Difference with RODIM PPF</span>
                  </div>
                </Link>
                <Link href="/product-rodim/1/specification">
                  <div className={`min-h-[5.6rem] flex items-center gap-[.4rem] font-bold ${isActive('specification') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}>
                    <Image 
                      src={WrenchIcon}
                      alt=''
                      width={0}
                      height={0}
                    />
                    <span>Spesifikasi Teknis</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`fixed inset-0 z-50 bg-black/64 backdrop-blur-2xl xl:hidden transition-all ease-in-out translate-x-[-100%] ${isOpenMenu ? "translate-x-[0%]" : ""}`}>
        <div className="bg-[#1F1F1F] w-full h-full p-[2.4rem] flex flex-col gap-[1.6rem] lg:max-w-[82rem]">
          <div className="flex justify-between items-center">
            <Image
              src={LogoRodim}
              alt="Logo Rodim"
              width={132}
              height={32}
            />

            <button
              onClick={() => {
                console.log('hallo 1')
                setIsOpenMenu(!isOpenMenu)
              }}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-[1.6rem]">
            <Link href="/">
              <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/' ? "bg-white/10" : "bg-transparent"}`}>HOME</div>
            </Link>

            <div className="flex flex-col gap-[.4rem]">
              <div className="flex items-center gap-[1.2rem] h-[3.2rem]">
                <span className="text-[#9BA2B0] text-[1rem]">PRODUCTS</span>
                <div className="h-[.1rem] w-full bg-[#E5E7EB]" />
              </div>
              <Link href="#">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/' ? "bg-white/10" : "bg-transparent"}`}>RODIM R1</div>
              </Link>
              <Link href="#">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/1' ? "bg-white/10" : "bg-transparent"}`}>RODIM R2 MATTE</div>
              </Link>
              <Link href="#">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/2' ? "bg-white/10" : "bg-transparent"}`}>RODIM R2 PRO</div>
              </Link>
              <Link href="#">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/3' ? "bg-white/10" : "bg-transparent"}`}>RODIM R3 PRO</div>
              </Link>
              <Link href="#">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/4' ? "bg-white/10" : "bg-transparent"}`}>RODIM R4 PRO</div>
              </Link>
            </div>

            <div className="flex flex-col gap-[.4rem]">
              <div className="flex items-center gap-[1.2rem] h-[3.2rem]">
                <span className="text-[#9BA2B0] text-[1rem]">PAGES</span>
                <div className="h-[.1rem] w-full bg-[#E5E7EB]" />
              </div>
              <Link href="/about">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/4' ? "bg-white/10" : "bg-transparent"}`}>TENTANG  BASF RODIM</div>
              </Link>
              <Link href="/">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/4' ? "bg-white/10" : "bg-transparent"}`}>GALERI</div>
              </Link>
              <Link href="/warranty">
                <div className={`w-full text-[1.4rem] min-h-[4.8rem] flex items-center px-[.8rem] rounded-[.8rem] ${ pathname === '/4' ? "bg-white/10" : "bg-transparent"}`}>GARANSI</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
