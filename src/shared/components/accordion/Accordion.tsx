'use client';

import { ChevronDown } from 'lucide-react';
import React, { ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  content: ReactNode;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="flex gap-4 cursor-pointer transition-all duration-300"
      onClick={toggleAccordion}
    >
      {/* Accordion Arrow */}
      <div className="pt-2">
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={30}
        />
      </div>
      {/* Accordion Content */}
      <div className="border-b pb-10 w-full">
        <h3 className="text-[2.8rem] font-semibold">{title}</h3>
        {/* Content Wrapper */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 px-2 text-[1.8rem] font-normal leading-[2.8rem] flex flex-col gap-8 text-white/80">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
