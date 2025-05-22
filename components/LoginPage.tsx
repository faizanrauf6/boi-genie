// components/LoginPage.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white text-gray-900 dark:bg-zinc-900 dark:text-white transition-colors">
      <h1 className="text-3xl font-bold mb-6">Login to BioGenie</h1>

      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="mb-4 px-4 py-2 rounded bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
      >
        Sign in with GitHub
      </button>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-colors"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => signIn("twitter", { callbackUrl: "/" })}
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
      >
        Sign in with Twitter
      </button>
    </div>
  );
}
