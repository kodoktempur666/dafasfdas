"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: string) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setUser({ role: savedRole });
    }
    setLoading(false);
  }, []);

  const login = (role: string) => {
    localStorage.setItem("role", role);
    setUser({ role });
  };

  const logout = () => {
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
