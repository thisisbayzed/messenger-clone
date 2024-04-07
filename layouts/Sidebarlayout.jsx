import getCurrentUser from "@/actions/getCurrentUser";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobilFooters from "@/components/MobilFooters";
import React from "react";

async function Sidebarlayout({ children }) {
  const CurrentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={CurrentUser} />
      <MobilFooters />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebarlayout;
