"use client";

import React, { useState } from "react";
import AdminPanel from "@/components/AdminPanel";
import { toast } from "react-hot-toast";
import { MyButton } from "@/components/MyButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/checkLogins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        // setError(data.error);
        toast.error(data.error);
      }
    } catch (err) {
      setError("An error occurred while logging in.");
      toast.error(data.error);
    }
  };

  return success ? (
    <AdminPanel />
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit">
            <MyButton
              type="submit"
              text="Login"
              color="blue"
              className="w-full text-white "
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
