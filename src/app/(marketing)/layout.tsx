import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import React, { Suspense } from 'react';

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Suspense fallback={<h1>loading</h1>}>
        <PopupLanguage />
      </Suspense>
      {children}
    </main>
  );
};

export default MarketingLayout;
