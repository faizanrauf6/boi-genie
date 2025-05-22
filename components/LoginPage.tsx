"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 px-4 transition-colors">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700">
       <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Welcome to BioGenie
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Sign in with your favorite provider
        </p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex items-center justify-center rounded bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
          >
            <GitHubIcon className="mr-2 h-5 w-5" />
            Sign in with GitHub
        </button>
                  
        <button
            onClick={() => signIn("linkedin", { callbackUrl: "/" })}
            className="flex items-center justify-center rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
          >
            <LinkedInIcon className="mr-2 h-5 w-5" />
            Sign in with LinkedIn
          </button>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
            Sign in with Google
          </button>

          <button
            onClick={() => signIn("twitter", { callbackUrl: "/" })}
            className="flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            <TwitterIcon className="mr-2 h-5 w-5" />
            Sign in with Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

// Icon components

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.66.26 2.89.13 3.19.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.96.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.805 10.023h-9.773v3.955h5.605c-.246 1.367-1.748 4.015-5.605 4.015-3.377 0-6.128-2.79-6.128-6.226 0-3.437 2.75-6.227 6.128-6.227 1.92 0 3.202.824 3.942 1.533l2.69-2.59C17.49 5.31 15.027 4.2 12.034 4.2 6.86 4.2 2.84 8.755 2.84 13.93c0 5.175 4.02 9.73 9.194 9.73 5.296 0 8.814-3.704 8.814-8.933 0-.6-.066-1.043-.043-1.704z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.954 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.379 4.482 13.948 13.948 0 01-10.125-5.13 4.822 4.822 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.902 4.902 0 01-2.224.084 4.928 4.928 0 004.6 3.42 9.867 9.867 0 01-6.102 2.1c-.396 0-.787-.023-1.175-.067a13.945 13.945 0 007.548 2.213c9.058 0 14.01-7.496 14.01-13.987 0-.21 0-.423-.015-.63A9.936 9.936 0 0024 4.59z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.446-2.136 2.94v5.667H9.057V9h3.112v1.561h.043c.434-.823 1.493-1.69 3.073-1.69 3.287 0 3.89 2.164 3.89 4.977v6.604zM5.337 7.433a1.803 1.803 0 01-1.802-1.8c0-.994.807-1.8 1.802-1.8.994 0 1.802.806 1.802 1.8 0 .994-.808 1.8-1.802 1.8zm1.556 13.019H3.78V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .77 23.2 0 22.225 0z" />
    </svg>
  );
}
