'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LogoRodim from '../../../assets/logos/logo.svg';
import NavbarSlide from './NavbarSlide';
import NavbarSub from './NavbarSub';
import NavbarMenu from './NavbarMenu';
import { AlignJustify } from 'lucide-react';
import { products } from '@/shared/libs/data/products';
import { getAllProductsAction } from '@/features/admin/actions/product/action';
import { desiredOrderProduct } from './const';
import { useTranslations } from 'use-intl';

const Navbar = () => {
  const t = useTranslations('Navbar');

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const newNavProductList = desiredOrderProduct.map((data, index) => ({
    id: index,
    title: data,
    slug: '/',
  }));
  const [navProductList, setNavProductList] = useState(newNavProductList);

  const pathname = usePathname();
  const segments = pathname.split('/');
  const page = segments[1];
  const productSlug = segments[2];

  useEffect(() => {
    const getProductLink = async () => {
      const productLink = await getAllProductsAction();

      if (!Array.isArray(productLink)) {
        return;
      }

      const sortedProductLink = [...productLink].sort((a, b) => {
        const indexA = desiredOrderProduct.findIndex(
          (code) => code.toLowerCase() === a.code.toLowerCase()
        );
        const indexB = desiredOrderProduct.findIndex(
          (code) => code.toLowerCase() === b.code.toLowerCase()
        );
        return indexA - indexB;
      });

      const newNavProductList = sortedProductLink.map((data) => ({
        id: data.id,
        title: data.code,
        slug: `/product-rodim/${data.slug}`,
      }));

      setNavProductList(newNavProductList);
    };

    getProductLink();
  }, []);

  const selectedData =
    page && page === 'product-rodim'
      ? navProductList.find((data) => data.slug.endsWith(productSlug)) || {
          title: '',
          slug: '',
        }
      : { title: '', slug: '' };

  return (
    <>
      <div className={`${page === 'product-rodim' ? "" : "sticky top-0"} z-[999]`}>
        <nav className="flex justify-center bg-[#1F1F1F] text-white/80">
          <div className="w-full max-w-[1440px] gap-[50px] flex justify-between px-[16px] min-[1024px]:px-[40px] min-[1440px]:px-[120px] items-center h-[72px] text-[14px]">
            <div className="flex flex-1 min-[1440px]:flex-none">
              <button
                type="button"
                className="w-[38px] h-[38px] min-[1440px]:hidden flex justify-center items-center border border-white rounded-[8px] cursor-pointer"
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                <AlignJustify size={14} />
              </button>

              <div className="flex-1 min-[1440px]:flex-none flex justify-center items-center">
                <Link href="/">
                  <Image
                    src={LogoRodim}
                    alt="Logo Rodim"
                    width={132}
                    height={32}
                    className="min-[1440px]:w-[90px] min-[1440px]:h-[22px]"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden min-[1440px]:flex flex-1 justify-between h-full">
              <Link
                href="/"
                className={`h-full flex items-center hover:text-white transition-all duration-300 ease-in-out ${pathname === '/' ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
              >
                HOME
              </Link>

              <div className="flex h-full items-center">
                {navProductList.map(({ id, title, slug }, index) => (
                  <NavbarMenu
                    key={id}
                    id={slug}
                    title={title}
                    firstChild={1 === index + 1}
                    lastChild={products.length === index + 1}
                    isProduct={true}
                  />
                ))}
              </div>

              <div className="flex h-full items-center">
                <NavbarMenu
                  id={'about'}
                  title={t('about')}
                  firstChild={true}
                  lastChild={false}
                  isProduct={false}
                />
                <NavbarMenu
                  id={'gallery'}
                  title={t('gallery')}
                  firstChild={false}
                  lastChild={false}
                  isProduct={false}
                />
                <NavbarMenu
                  id={'warranty'}
                  title={t('warranty')}
                  firstChild={false}
                  lastChild={true}
                  isProduct={false}
                />
              </div>
            </div>
          </div>
        </nav>

        <NavbarSlide
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          data={navProductList}
        />
      </div>

      <NavbarSub
        title={selectedData.title}
        introduction={t('Product.introduction')}
        specification={t('Product.specification')}
      />
    </>
  );
};

export default Navbar;
