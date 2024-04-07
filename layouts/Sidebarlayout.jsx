import DesktopSidebar from "@/components/DesktopSidebar";
import MobilFooters from "@/components/MobilFooters";
import React from "react";

async function Sidebarlayout({ children }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobilFooters />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebarlayout;
