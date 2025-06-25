import { StaticImageData } from 'next/image';
import RodimR2Pro from '../../../assets/images/products/R2-PRO.jpg';
import RodimR3Pro from '../../../assets/images/products/R3-PRO.jpg';
import RodimR2Matte from '../../../assets/images/products/R2-Matte.jpg';
import RodimR1 from '../../../assets/images/products/R1.jpg';
import RodimR4Pro from '../../../assets/images/products/R4-PRO.jpg';

export type Product = {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  productUrl: string;
};

export const products: Product[] = [
  {
    image: RodimR2Pro,
    title: 'RODIM R2 PRO',
    subtitle: 'Professional-grade car body shield',
    productUrl: '/products/rodim-r2-pro',
  },
  {
    image: RodimR3Pro,
    title: 'RODIM R3 PRO',
    subtitle: 'Highest quality, professional-grade paint finish protection',
    productUrl: '/products/rodim-ultra-gloss',
  },
  {
    image: RodimR2Matte,
    title: 'RODIM R2 Matte',
    subtitle: 'Outstanding Matte Finish',
    productUrl: '/products/rodim-matte-finish',
  },
  {
    image: RodimR1,
    title: 'RODIM R1',
    subtitle: 'Brighter than other films at the same level',
    productUrl: '/products/rodim-carbon-series',
  },
  {
    image: RodimR4Pro,
    title: 'RODIM R4 PRO',
    subtitle: 'Enjoy the ultimate protection',
    productUrl: '/products/rodim-carbon-series',
  },
];
