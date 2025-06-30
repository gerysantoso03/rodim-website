'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LogoRodimBlue from '../../../assets/logos/logo-rodim-blue.svg';
import { useEffect, useState } from 'react';

const PopupLanguage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [locale, setLocale] = useState<string>("")
  const router = useRouter()

  const changeLocale = (newLocale:string) => {
    setLocale(newLocale)
    setIsOpen(false)
    document.cookie = `RODIM_LOCALE=${newLocale}`
    router.refresh()
  } 

  useEffect(() => {
    const cookieLocale = document.cookie.split("; ").find((row) => row.startsWith("RODIM_LOCALE="))?.split("=")[1]

    if(cookieLocale) {
      setLocale(cookieLocale)
      setIsOpen(false)
    } else {
      setIsOpen(true)
      // const browserLocale = navigator.language.slice(0, 2)
      // setLocale(browserLocale)
      // document.cookie = `RODIM_LOCALE=${browserLocale}`
      // router.refresh()
    }
  }, [router])

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-[9999] w-screen h-screen bg-black/64 backdrop-blur-[40px] flex justify-center items-center`}>
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
              onClick={() => changeLocale("id")}
            >
              Indonesia
            </button>
            <button
              className="border border-[var(--color-primary-blue)] text-[var(--color-primary-blue)] h-[4.4rem] rounded-full font-[400] text-[1.7rem] cursor-pointer"
              type="button"
              onClick={() => changeLocale("en")}
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
