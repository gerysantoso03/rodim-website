"use client"

import { Accordion } from '@/shared/components/accordion';
import SectionWrapper from '@/shared/components/section-wrapper/SectionWrapper';
import { useFaqs } from '@/shared/libs/data/useFaqs';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FAQPage = () => {
const faqs = useFaqs();

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
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Wrappers */}
        <div className="flex flex-col gap-[4rem]">
          {faqs.map((faq, idx) => (
            <Accordion key={idx} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default FAQPage;
