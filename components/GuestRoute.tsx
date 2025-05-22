// components/GuestRoute.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function GuestRoute({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") return <Loading />;
  if (status === "authenticated") {
    router.replace("/");
    return null;
  }

  return <>{children}</>;
}
