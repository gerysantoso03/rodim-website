import { StaticImageData } from 'next/image';
import ThicknessImage from "../../../assets/images/introductions/thickness.jpg" 
import GlossImage from "../../../assets/images/introductions/gloss.jpg" 
import QuvImage from "../../../assets/images/introductions/QUV.jpg" 
import WarrantImage from "../../../assets/images/introductions/warranty.jpg" 

import ThicknessIcon from "../../../assets/icons/thickness.svg" 
import GlossIcon from "../../../assets/icons/gloss.svg" 
import QuvIcon from "../../../assets/icons/QUV.svg" 
import WarrantyIcon from "../../../assets/icons/warranty.svg" 

export type Introductions = {
  image: StaticImageData | string;
  icon: StaticImageData | string;
  title: string;
  subtitle: string;
};

export const introductions: Introductions[] = [
  {
    image: ThicknessImage,
    icon: ThicknessIcon,
    title: 'Thickness',
    subtitle: '≥ 7.5 mil'
  },
  {
    image: GlossImage,
    icon: GlossIcon,
    title: 'Gloss (60°)',
    subtitle: '≥ 93'
  },
  {
    image: QuvImage,
    icon: QuvIcon,
    title: 'QUV',
    subtitle: '≥ 2800 jam'
  },
  {
    image: WarrantImage,
    icon: WarrantyIcon,
    title: 'Warranty',
    subtitle: '10 Tahun'
  }
];
