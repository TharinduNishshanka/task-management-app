import React from 'react';
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <a href="http://localhost:5000/api/auth/google" className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </a>
    </div>
  );
}
