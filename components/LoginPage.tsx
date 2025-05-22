// components/LoginPage.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6">Login to BioGenie</h1>
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="mb-4 px-4 py-2 bg-black text-white rounded"
      >
        Sign in with GitHub
      </button>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
