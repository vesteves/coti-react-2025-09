'use client';

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
    <>
      <div className="bg-green-100 h-[100px]">Navbar</div>
      <div className="flex gap-2">
        <div className="bg-red-100 h-screen w-md">Menu</div>
        <div className="bg-blue-100 h-screen w-full">{children}</div>
      </div>
    </>
  );
}
