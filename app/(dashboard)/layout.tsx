"use client";
import { AuthContext } from '@/context/auth_context';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "user") {
        router.replace("/"); // replace biar ga bisa balik dengan back
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="p-6">🔄 Checking authentication...</div>;
  }

  if (!user || user.role !== "user") {
    return null; // jangan render apapun sampai redirect
  }

  return <main>{children}</main>;
};

export default UserLayout;
