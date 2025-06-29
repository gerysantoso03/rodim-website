import Image from 'next/image';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid min-h-screen w-full grid-cols-none grid-rows-[auto_1fr] bg-utility-gray-50 xl:grid-rows-none xl:grid-cols-2">
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src="/image/auth/background.jpg"
          alt="background login image"
          fill
          className="object-cover object-[50%_-8vh] transform scale-[1.25]"
        />
        <div className="absolute inset bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col justify-between py-8 px-12">
          <Image
            src="/image/auth/logo.png"
            alt="RODIM PPF Logo"
            width={150}
            height={150}
          />
          <p className="text-2xl text-white font-normal leading-7">
            “You’re not just updating content. You’re shaping a premium
            experience.”
          </p>
        </div>
      </div>
      <div className="w-full grid place-items-center bg-white">{children}</div>
    </main>
  );
};

export default AuthLayout;
