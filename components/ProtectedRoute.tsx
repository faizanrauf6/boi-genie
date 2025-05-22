// components/ProtectedRoute.tsx
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") return <Loading />;
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}
