"use client";

import { AuthContext } from "@/context/auth_context";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // dummy aja
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = () => {
    login(username);

    setTimeout(() => {
      if (username === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    }, 100);
  };


  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Login</h1>
      <input
        className="border p-2 mb-2 block"
        placeholder="Masukkan role (admin / user)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mb-2 block"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
