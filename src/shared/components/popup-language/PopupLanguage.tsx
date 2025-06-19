'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import LogoRodimBlue from '../../../../public/image/logos/logo-rodim-blue.svg';

const PopupLanguage = () => {
  const searchParams = useSearchParams();
  const showLanguagePopup = searchParams.get('language') === 'true';

  if (!showLanguagePopup) return '';

  return (
    <div className="absolute w-screen h-screen bg-black/64 backdrop-blur-[40px] z-50 flex justify-center items-center">
      <div className="bg-white p-[3.2rem] flex flex-col gap-[2.4rem] rounded-[1.8rem] w-full max-w-[39.2rem] lg:max-w-[52rem] lg:gap-[3.2rem] m-[2.4rem]">
        <Image
          src={LogoRodimBlue}
          alt="logo rodim blue"
          width={180}
          height={60}
        />

        <div className="border flex flex-col gap-[2.4rem]">
          <span className="text-[2.8rem] lg:text-[3.2rem] text-[#14171A] font-[700]">
            Welcome to RODIM PPF
          </span>

          <div className="border flex flex-col gap-[1.6rem]">
            <button
              className="border border-[var(--color-primary-blue)] text-[var(--color-primary-blue)] h-[4.4rem] rounded-full font-[400] text-[1.7rem] cursor-pointer"
              type="button"
            >
              Indonesia test
            </button>
            <button
              className="border border-[var(--color-primary-blue)] text-[var(--color-primary-blue)] h-[4.4rem] rounded-full font-[400] text-[1.7rem] cursor-pointer"
              type="button"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLanguage;
