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

  function handleLogout() {
    localStorage.removeItem("memberId");
    localStorage.removeItem("member");
    router.replace("/login");
  }

  if (loading) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#081B33]">
      <p className="text-white text-xl">Loading Dashboard...</p>
    </main>
  );
}

return <DashboardGrid memberId={memberId} />;
}