'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isSpecialPage = pathname === '/faq' || pathname === '/care-instruction';


  useEffect(() => {
    console.log(isSpecialPage)
  }, []) 

  return (
    <div className='border border-purple-500 py-[1.6rem]'>
      <section className={`section-wrapper border border-red-500 !py-[3.2rem] ${isSpecialPage ? "!px-[2.4rem] lg:!p-[6.4rem] xl:!p-[12rem]" : "!px-[1.6rem]"} flex flex-col gap-[1.6rem]`}>
        {children}
      </section>
    </div>
  )
}

export default SectionWrapper