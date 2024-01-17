'use client';

import { ReactNode, useState } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
