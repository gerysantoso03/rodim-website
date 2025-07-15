import { StaticImageData } from 'next/image';
import RodimR2Pro from '../../../assets/images/products/R2-PRO.jpg';
import RodimR3Pro from '../../../assets/images/products/R3-PRO.jpg';
import RodimR2Matte from '../../../assets/images/products/R2-Matte.jpg';
import RodimR1 from '../../../assets/images/products/R1.jpg';
import RodimR4Pro from '../../../assets/images/products/R4-PRO.jpg';

export type Product = {
  image: StaticImageData | string;
  title: string;
  id: string;
  subtitle: string;
  warranty: string;
};

export const products: Product[] = [
  {
    image: RodimR2Pro,
    title: 'RODIM R2 PRO',
    id: 'rodim-r2-pro',
    subtitle: 'Professional-grade car body shield',
    warranty: '10',
  },
  {
    image: RodimR3Pro,
    title: 'RODIM R3 PRO',
    id: 'rodim-r3-pro',
    subtitle: 'Highest quality, professional-grade paint finish protection',
    warranty: '10',
  },
  {
    image: RodimR2Matte,
    title: 'RODIM R2 MATTE',
    id: 'rodim-r2-matte',
    subtitle: 'Outstanding matte finish',
    warranty: '10',
  },
  {
    image: RodimR1,
    title: 'RODIM R1',
    id: 'rodim-r1',
    subtitle: 'Brighter than other films at the same level',
    warranty: '7',
  },
  {
    image: RodimR4Pro,
    title: 'RODIM R4 PRO',
    id: 'rodim-r4-pro',
    subtitle: 'Enjoy the ultimate protection',
    warranty: '10',
  },
];
