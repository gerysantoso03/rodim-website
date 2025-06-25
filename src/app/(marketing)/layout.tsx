import Footer from '@/shared/components/footer/Footer';
import Navbar from '@/shared/components/navbar/Navbar';
import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import React, { Suspense } from 'react';

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<h1>loading</h1>}>
          <PopupLanguage />
        </Suspense>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
