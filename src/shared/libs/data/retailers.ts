import { StaticImageData } from 'next/image';
import IconTiktok from '../../../assets/icons/tiktok.svg';
import IconInstagram from '../../../assets/icons/instagram.svg';
import IconWhatsapp from '../../../assets/icons/whatsapp.svg';
import IconTokopedia from '../../../assets/icons/tokopedia.png';
import IconShopee from '../../../assets/icons/shopee.png';
import IconBliBli from '../../../assets/icons/bli-bli.png';

export type Retailers = {
  image: StaticImageData | string;
  title: string;
  url: string;
};

export const retailers: Retailers[] = [
  {
    image: IconTiktok,
    title: 'Tiktok',
    url: '#',
  },
  {
    image: IconInstagram,
    title: 'Instagram',
    url: '#',
  },
  {
    image: IconWhatsapp,
    title: 'Whatsapp',
    url: '#',
  },
  {
    image: IconTokopedia,
    title: 'Tokopedia',
    url: 'https://www.tokopedia.com/rodim-ppf-indonesia',
  },
  {
    image: IconShopee,
    title: 'Shopee',
    url: 'https://shopee.co.id/rodim.ppf.indonesia',
  }
];
