'use client';

import Link from 'next/link';
import Image from 'next/image';
import CarIcon from '../../../assets/icons/car.svg';
import GitCompareIcon from '../../../assets/icons/git-compare.svg';
import WrenchIcon from '../../../assets/icons/wrench.svg';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type NavbarSubProps = {
  title: string;
  introduction: string;
  specification: string;
};

const NavbarSub = ({ title, introduction, specification }: NavbarSubProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const [isTop, setIsTop] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const segments = pathname.split('/');
  const page = segments[1];
  const productId = segments[2];
  const subPage = segments[3] || '';

  const isActive = (check: string) => subPage === check;

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        const scrollHeight = dropdownRef.current.scrollHeight;
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight('0px');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;
      const rect = stickyRef.current.getBoundingClientRect();
      setIsTop(rect.top <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (page !== 'product-rodim') return null;

  return (
    <div className="sticky top-0 z-[9999]" ref={stickyRef}>
      <div className={`text-white/80 relative`}>
        <div
          className={`absolute inset-0 z-[1] ${isTop ? 'backdrop-blur-2xl bg-white/12 border-b-1 border-white/20' : 'bg-[#1F1F1F] border-b-1 border-transparent'} transition-all duration-300 ease-in-out`}
        ></div>
        <div className="w-full relative z-[2] max-w-[1440px] mx-auto min-h-[5.2rem] flex px-[16px] min-[1024px]:px-[40px] min-[1440px]:px-[120px] text-[14px]">
          <div className="text-[2rem] font-bold flex justify-between w-full flex-[1]">
            <div className="h-full flex items-center">
              <span>{title.toUpperCase()}</span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev: boolean) => !prev)}
              className="transition-transform duration-[0.3s] cursor-pointer lg:hidden"
            >
              <ChevronDown
                className={`transform transition-transform duration-[0.3s] ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <div className="gap-[2.4rem] text-[1.4rem] hidden lg:flex">
              <Link href={`/product-rodim/${productId}`}>
                <div
                  className={`h-full flex items-center gap-[.4rem] font-bold hover:text-white transition-all duration-300 ease-in-out ${subPage === '' ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}
                >
                  <Image src={CarIcon} alt="" width={0} height={0} />
                  <span>{introduction}</span>
                </div>
              </Link>

              <Link href={`/product-rodim/${productId}/feel-the-difference`}>
                <div
                  className={`h-full flex items-center gap-[.4rem] font-bold hover:text-white transition-all duration-300 ease-in-out ${isActive('feel-the-difference') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}
                >
                  <Image src={GitCompareIcon} alt="" width={0} height={0} />
                  <span>Feel the Difference with RODIM PPF</span>
                </div>
              </Link>

              <Link href={`/product-rodim/${productId}/specification`}>
                <div
                  className={`h-full flex items-center gap-[.4rem] font-bold hover:text-white transition-all duration-300 ease-in-out ${isActive('specification') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}
                >
                  <Image src={WrenchIcon} alt="" width={0} height={0} />
                  <span>{specification}</span>
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
            className={`absolute ${isTop ? 'backdrop-blur-2xl bg-white/12' : 'bg-[#1F1F1F]'} transition-all duration-300 ease-in-out z-10 w-full left-0 top-[100%] right-0 px-[1.6rem] lg:hidden`}
          >
            <div className="py-[1.2rem]">
              <Link href={`/product-rodim/${productId}`}>
                <div
                  className={`min-h-[5.6rem] flex items-center gap-[.4rem] font-bold hover:text-white transition-all duration-300 ease-in-out ${subPage === '' ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}
                  onClick={() => setIsOpen((prev: boolean) => !prev)}
                >
                  <Image src={CarIcon} alt="" width={0} height={0} />
                  <span>{introduction}</span>
                </div>
              </Link>
              <Link href={`/product-rodim/${productId}/feel-the-difference`}>
                <div
                  className={`min-h-[5.6rem] flex items-center gap-[.4rem] font-bold hover:text-white transition-all duration-300 ease-in-out ${isActive('feel-the-difference') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}
                  onClick={() => setIsOpen((prev: boolean) => !prev)}
                >
                  <Image src={GitCompareIcon} alt="" width={0} height={0} />
                  <span>Feel the Difference with RODIM PPF</span>
                </div>
              </Link>
              <Link href={`/product-rodim/${productId}/specification`}>
                <div
                  className={`min-h-[5.6rem] flex items-center gap-[.4rem] font-bold hover:text-white transition-all duration-300 ease-in-out ${isActive('specification') ? 'text-white border-b-[.2rem] border-white' : 'border-b-[.2rem] border-transparent'}`}
                  onClick={() => setIsOpen((prev: boolean) => !prev)}
                >
                  <Image src={WrenchIcon} alt="" width={0} height={0} />
                  <span>{specification}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSub;
