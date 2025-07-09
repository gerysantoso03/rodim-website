import { useTranslations } from 'next-intl';
import SectionWrapper from '@/shared/components/section-wrapper/SectionWrapper';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CareInstructionPage = () => {
  const t = useTranslations('CareInstructionPage');

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col gap-[2.4rem] border">
          {/* Navigation Link */}
          <Link className="text-[1.7rem] flex items-center gap-2" href="/">
            <span>
              {' '}
              <ArrowLeft size={17} />
            </span>
            Kembali{' '}
          </Link>

          <h1 className="text-[4rem] lg:text-[4.6rem] font-bold leading-[100%]">
            Paint Protection Film Care Instructions
          </h1>
        </div>

        {/* Care Instruction Wrappers */}
        <div className="border border-white px-[2.4rem]">
          <ol className="list-decimal flex flex-col gap-2 pl-6 text-white/80 text-[1.8rem] leading-[2.6rem]">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index}>{t(`care${index + 1}`)}</li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CareInstructionPage;
