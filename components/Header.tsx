"use client";

import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import Github from "./GitHub";
import ThemeToggle from "./ThemeToggle";
import { LogoutButton } from "./LogoutButton";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 border-gray-300 dark:border-zinc-700 pb-7 sm:px-4 px-2 transition-colors">
      <Link href="/" className="flex space-x-3 items-center">
        <img
          alt="header text"
          src="/write.svg"
          className="sm:w-9 sm:h-9 w-8 h-8 dark:invert"
        />
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight text-gray-900 dark:text-gray-100 transition-colors">
          BioGenie
        </h1>
      </Link>

      <div className="flex items-center space-x-4">
        <ThemeToggle />

        {session?.user ? (
          <>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Hello, {session.user.name?.split(" ")[1]}
            </p>
            <LogoutButton />
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:border-gray-600 dark:hover:bg-zinc-700"
          >
            Login
          </button>
        )}

        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:border-gray-600 dark:hover:bg-zinc-700"
          href="https://github.com/faizanrauf6/boi-genie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a>
      </div>
    </header>
  );
}
