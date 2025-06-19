import PopupLanguage from '@/shared/components/popup-language/PopupLanguage';
import React from 'react';

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <PopupLanguage />
      {children}
    </main>
  );
};

export default MarketingLayout;
