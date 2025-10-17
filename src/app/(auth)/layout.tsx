'use client';

import Navbar from '@/components/atoms/Navbar';
import Menu from '@/components/molecules/Menu';
import { MenuProvider, useMenu } from '@/contexts/MenuContext';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MenuProvider>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </MenuProvider>
  );
}

const AuthLayoutContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isNotAuthenticated } = useAuth();
  const { isOpen, toggleMenu } = useMenu();

  const menuClasses = () => {
    if (isOpen) {
      return 'w-[16rem]';
    }

    return 'hidden';
  };

  useEffect(() => {
    isNotAuthenticated();
  }, [isNotAuthenticated]);

  return (
    <div>
      <div className="flex gap-2">
        {/* isOpen ? 'w-[16rem]' : 'hidden' */}
        <div className={menuClasses()}>
          <Menu />
        </div>
        <div className="w-full">
          <Navbar handleMenuClick={() => toggleMenu()} />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
