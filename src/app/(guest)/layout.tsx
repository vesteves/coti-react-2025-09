'use client';

import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return <>{children}</>;
}
