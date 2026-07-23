"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardGrid from "@/components/dashboard/DashboardGrid";

export default function Dashboard() {
  const router = useRouter();

  const [memberId, setMemberId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("memberId");

    if (!id) {
      router.replace("/login");
      return;
    }

    setMemberId(id);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#081B33]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
          <p className="mt-4 text-white">Loading Dashboard...</p>
        </div>
      </main>
    );
  }

  return <DashboardGrid memberId={memberId} />;
}