'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      // once: true,
      offset: 300,
    });
  }, []);

  return (
    <ProgressProvider
      height="2px"
      color="#ffffff"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
