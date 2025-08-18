"use client";

import { AuthContext } from "@/context/auth_context";
import { useContext } from "react";

export default function AdminPage() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
}