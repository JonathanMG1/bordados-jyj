'use client';

import { ReactNode } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-2 mb-10 p-14">{children}</div>
      <Footer />
    </>
  );
};
export default MainLayout;
