'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarMenuProps = {
  id: string;
  title: string;
  firstChild?: boolean;
  lastChild?: boolean;
  isProduct?: boolean;
};

const NavbarMenu = ({
  id,
  title,
  firstChild,
  lastChild,
  isProduct,
}: NavbarMenuProps) => {
  const pathname = usePathname();

  const segments = pathname.split('/');
  const productId = segments[2];

  const idHref = id.split('/')[2] || '';

  return (
    <div
      className={`h-full relative ${lastChild && 'pr-0'} ${firstChild && 'pl-0'} px-[12px] flex items-center`}
    >
      <Link
        href={!isProduct ? `/${id}` : `${id}`}
        className={`h-full flex items-center hover:text-white transition-all duration-300 ease-in-out ${productId === idHref || pathname === `/${id}` ? 'font-bold border-b-2 border-white/80' : 'border-b-2 border-transparent'}`}
      >
        {title.toUpperCase()}
      </Link>
      <div
        className={`h-[20px] ${!lastChild && 'border-r border-white/80'} absolute right-0`}
      />
    </div>
  );
};

export default NavbarMenu;
