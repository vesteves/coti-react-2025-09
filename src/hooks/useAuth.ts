'use client'

import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter()

  const isAuthenticated = () => {
    const userString = localStorage.getItem('user') || '{}';
    const user = JSON.parse(userString);

    if (user.email) {
      router.push('/dashboard');
    }
  }

  const isNotAuthenticated = () => {
    const userString = localStorage.getItem('user') || '{}';
    const user = JSON.parse(userString);

    if (!user.email) {
      router.push('/auth/login');
    }
  }

  const saveUserLocalStorage = (email: string) => {
    const user = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(user));
  }

  return {
    isAuthenticated,
    isNotAuthenticated,
    saveUserLocalStorage
  }
}