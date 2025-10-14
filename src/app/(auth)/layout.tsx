'use client';

import Navbar from '@/components/atoms/Navbar';
import Menu from '@/components/molecules/Menu';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isNotAuthenticated } = useAuth();

  useEffect(() => {
    isNotAuthenticated();
  }, [isNotAuthenticated]);

  return (
    <div>
      <div className="flex gap-2">
        <div className="w-[16rem]">
          <Menu />
        </div>
        <div className="w-full">
          <Navbar />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
