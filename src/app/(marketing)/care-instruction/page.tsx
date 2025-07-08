import { useTranslations } from 'next-intl';
import React from 'react';

const CareInstructionPage = () => {
  const t = useTranslations('CareInstructionPage');

  return (
    <main className="faq">
      <section className="section-wrapper">
        <div className="md:px-[10rem] md:py-[6rem]">
          <h1 className="text-[4.6rem] font-bold leading-[100%] mt-10">
            Paint Protection Film Care Instructions
          </h1>

          {/* Care Instruction Wrappers */}
          <div className="mt-20">
            <ol className="list-decimal flex flex-col gap-2 pl-6 text-white/80 text-[1.8rem] leading-[2.6rem]">
              {Array.from({ length: 10 }).map((_, index) => (
                <li key={index}>{t(`care${index + 1}`)}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareInstructionPage;
