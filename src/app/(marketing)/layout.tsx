import Footer from '@/shared/components/footer/Footer';
import Navbar from '@/shared/components/navbar/Navbar';
import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import React from 'react';

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main>
        <PopupLanguage />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
