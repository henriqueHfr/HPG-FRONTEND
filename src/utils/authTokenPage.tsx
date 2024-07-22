"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthTokenPage({ token }: { token: string | null }) {
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/home");
    }
  }, [token, router]);

  return null; 
}
