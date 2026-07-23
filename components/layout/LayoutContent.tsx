"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

 const hideLayout =
  pathname === "/dashboard" ||
  pathname.startsWith("/dashboard/") ||
  pathname === "/admin" ||
  pathname.startsWith("/admin/");

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className={!hideLayout ? "pt-20" : ""}>
        {children}
      </main>

      {!hideLayout && <Footer />}

      <ScrollToTop />
    </>
  );
}