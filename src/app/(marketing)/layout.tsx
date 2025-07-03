import Footer from '@/shared/components/footer/Footer';
import Navbar from '@/shared/components/navbar/Navbar';
import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import React, { Suspense } from 'react';

const MarketingLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main>
        <Suspense fallback={<h1>loading</h1>}>
          <PopupLanguage />
        </Suspense>
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
};

export default MarketingLayout;
