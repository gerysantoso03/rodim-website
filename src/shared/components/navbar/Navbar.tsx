'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoRodim from '../../../assets/logos/logo.svg';
import IconList from '../../../assets/icons/list.svg';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center bg-white/12 text-white/80">
      <div className="w-full max-w-[1440px] gap-[50px] flex justify-between px-[16px] min-[1024px]:px-[40px] min-[1440px]:px-[120px] items-center h-[72px] text-[14px]">
        <div className="flex flex-1 min-[1440px]:flex-none">
          <button
            type="button"
            className="w-[38px] h-[38px] min-[1440px]:hidden flex justify-center items-center border border-white rounded-[8px] cursor-pointer"
          >
            <Image src={IconList} alt="Logo Rodim" width={14} height={14} />
          </button>

          <div className="flex-1 min-[1440px]:flex-none flex justify-center items-center">
            <Image
              src={LogoRodim}
              alt="Logo Rodim"
              width={132}
              height={32}
              className="min-[1440px]:w-[90px] min-[1440px]:h-[22px]"
            />
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
                href="/gallery"
                className={`h-full flex items-center transition-all duration-300 ease-in-out ${pathname === '/gallery' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
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
  );
};

export default Navbar;
