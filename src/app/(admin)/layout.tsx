'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, Image as LucideImage, Car } from 'lucide-react';
import Image from 'next/image';
import { logoutAction } from '@/features/auth/actions/action';
// import { getSessionCookieName } from '@/shared/utils/session/session';
// import { redirect } from 'next/navigation';

const navItems = [
  {
    name: 'Gallery',
    href: '/gallery',
    icon: <LucideImage size={16} />,
  },
  {
    name: 'Product',
    href: '/product',
    icon: <Car size={16} />,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = cookies();
  // const session = cookieStore.get(getSessionCookieName());

  // if (!session) {
  //   redirect('/login');
  // }

  const pathname = usePathname();

  return (
    <main className="grid grid-cols-[250px_1fr] min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="bg-[#FAFAFA] border-r border-[#E4E4E7] flex flex-col">
        {/* Logo */}
        <div className="flex flex-col w-full max-w-[223px] pt-8 pl-8 pr-8 border-b">
          <Image
            src="/image/auth/logo-blue.png"
            alt="RODIM Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[14px]/[20px] w-[227px] h-[44px] rounded-lg flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive
                    ? 'bg-[#E5E7EB] text-black'
                    : 'text-gray-600 hover:bg-[#E5E7EB]'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="w-full px-8 py-8 border-t">
          <form action={logoutAction}>
            <button className="flex items-center gap-2 font-medium text-red-500 text-[14px]/[20px] hover:underline">
              <LogOut size={16} />
              Log out
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <section className="w-full h-screen overflow-y-auto bg-white px-8 py-6">
        {children}
      </section>
    </main>
  );
}
