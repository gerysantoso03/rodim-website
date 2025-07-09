import Footer from '@/shared/components/footer/Footer';
import Navbar from '@/shared/components/navbar/Navbar';
import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React, { Suspense } from 'react';
import Providers from './providers';

const MarketingLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main>
        <Suspense fallback={<h1>loading</h1>}>
          <PopupLanguage />
        </Suspense>
        <Providers>{children}</Providers>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
};

export default MarketingLayout;
