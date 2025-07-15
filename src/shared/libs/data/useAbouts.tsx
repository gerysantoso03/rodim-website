import { useTranslations } from 'next-intl';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import logo1 from '../../../assets/icons/new/about/anti corrosion web.png';
import logo2 from '../../../assets/icons/new/about/anti yellowing web.png';
import logo3 from '../../../assets/icons/new/about/self healing web.png';
import logo4 from '../../../assets/icons/new/about/stain n rust protection web.png';

type verticalIntegrationCards = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

type logos = {
  src: StaticImageData | string;
  alt: string;
  label: string;
};

type innovationCardsGroup1 = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

type innovationCardsGroup2 = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

type innovationCardsGroup3 = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

type paintProtectionItems = {
  title: string;
  description: string;
};

type Abouts = {
  verticalIntegrationCards: verticalIntegrationCards[];
  logos: logos[];
  innovationCardsGroup1: innovationCardsGroup1[];
  innovationCardsGroup2: innovationCardsGroup2[];
  innovationCardsGroup3: innovationCardsGroup3[];
  paintProtectionItems: paintProtectionItems[];
};

export function useAbouts(): Abouts[] {
  const t = useTranslations('AboutPage');

  return [
    {
      verticalIntegrationCards: [
        {
          image: '/image/about/business-segment-materials.jpg',
          alt: 'Business Segment Materials',
          title: 'Materials',
          description: 'Performace . Materials . Monomers',
        },
        {
          image: '/image/about/business-segment-chemicals.jpg',
          alt: 'Business Segment Chemicals',
          title: 'Chemicals',
          description: 'Petrochemicals . Intermediates',
        },
        {
          image: '/image/about/business-segment-nutrition-care.jpg',
          alt: 'Business Segment Nutrition Care',
          title: 'Nutrition & Care',
          description: 'Care Chemicals . Nutrition & Health',
        },
        {
          image: '/image/about/surface-technologies.png',
          alt: 'Surface Technologies',
          title: 'Surface Technologies',
          description: 'Catalysts . Coatings',
        },
        {
          image: '/image/about/business-segment-industrial-solutions.jpg',
          alt: 'Business Segment Industrial Solutions',
          title: 'Industrial Solutions',
          description: 'Dispensations & Resins . Performance',
        },
        {
          image: '/image/about/agricultural_solutions.jpg',
          alt: 'Agricultural Solutions',
          title: 'Agricultural Solutions',
          description: '', // Invisible description (same effect as placeholder)
        },
      ],
      logos: [
        {
          src: '/image/about/01.png',
          alt: 'Protects From Flying Stones',
          label: 'Protects from Flying Stones',
        },
        {
          src: '/image/about/02.png',
          alt: 'Anti Aging',
          label: 'Anti Aging',
        },
        {
          src: logo4,
          alt: 'Stain and Rust Protection',
          label: 'Stain and Rust Protection',
        },
        {
          src: '/image/about/04.png',
          alt: 'Glossy or Matte Finish',
          label: 'Glossy or Matte Finish',
        },
        {
          src: '/image/about/05.png',
          alt: 'Resists Accidental Scratches',
          label: 'Resists Accidental Scratches',
        },
        {
          src: '/image/about/06.png',
          alt: 'Easy to Clean',
          label: 'Easy to Clean',
        },
        {
          src: logo3,
          alt: 'Self Healing',
          label: 'Self Healing',
        },
        {
          src: '/image/about/08.png',
          alt: 'Hydrophobic',
          label: 'Hydrophobic',
        },
        {
          src: logo1,
          alt: 'Anti-Corrosion',
          label: 'Anti-Corrosion',
        },
        {
          src: logo2,
          alt: 'Anti-yellowing',
          label: 'Anti-yellowing',
        },
      ],
      innovationCardsGroup1: [
        {
          title: 'Manufacturing Bases Worldwide',
          description: t('innovation1'),
          image: '/image/about/manufacturing bases worldwide.PNG',
          alt: 'Manufacturing Bases Worldwide',
        },
        {
          title: 'Quality Control at The Source',
          description: t('innovation4'),
          image: '/image/about/quality-control-at-the-source.jpg',
          alt: 'Quality Control At The Source',
        },
      ],
      innovationCardsGroup2: [
        {
          title: 'High Quality German DNA',
          description: t('innovation2'),
          image: '/image/about/high quality german dna.png',
          alt: 'High Quality German DNA',
        },
        {
          title: 'One-stop service',
          description: t('innovation7'),
          image: '/image/about/one stop service.png',
          alt: 'One Stop Service',
        },
        {
          title: 'Custom-made',
          description: t('innovation6'),
          image: '/image/about/custom made.jpg',
          alt: 'Custom Made',
        },
      ],
      innovationCardsGroup3: [
        {
          title: 'First choice of Hi-tech Industries',
          description: t('innovation2'),
          image: '/image/about/first-choice-of-high-tech-industries.png',
          alt: 'First Choice of High Tech Industries',
        },
        {
          title: 'Advanced Craft',
          description: t('innovation5'),
          image: '/image/about/Advanced Craft baru.JPG',
          alt: 'Advance Craft',
        },
      ],
      paintProtectionItems: [
        {
          title: 'Expert Installation Services',
          description: t('paintProtectionInfo1'),
        },
        {
          title: 'Durable Protection Film',
          description: t('paintProtectionInfo2'),
        },
        {
          title: 'Custom Fit Solutions',
          description: t('paintProtectionInfo3'),
        },
      ],
    },
  ];
}
