import Footer from '@/shared/components/footer/Footer';
import Navbar from '@/shared/components/navbar/Navbar';
import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import React, { Suspense } from 'react';

const MarketingLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const messages = await getMessages()
  const locale = await getLocale()

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<h1>loading</h1>}>
          <PopupLanguage />
        </Suspense>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
