"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#081B33]">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 z-50 h-screen w-72">
        <Sidebar
          open={true}
          onClose={() => {}}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
     <main
  className="
    lg:ml-72
    h-screen
    overflow-y-auto
    bg-[#081B33]
        "
      >
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-yellow-500/20 bg-[#081B33] px-6 py-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg border border-yellow-500/20 bg-[#102b52] px-3 py-2 text-2xl text-white hover:bg-[#153861]"
          >
            ☰
          </button>

          <h2 className="text-xl font-bold text-yellow-400">
            EuroMillions
          </h2>

          <div className="w-10" />
        </div>

        {children}
      </main>

    </div>
  );
}