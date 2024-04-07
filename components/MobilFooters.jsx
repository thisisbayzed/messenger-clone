"use client";
import React from "react";
import useConversations from "@/hooks/useConversations";
import useRoutes from "@/hooks/useRoutes";
import MobilItmes from "./MobilItmes";

function MobilFooters() {
  const routes = useRoutes();

  const { isOpen } = useConversations();

  if (isOpen) return null;

  return (
    <div
      className="
  fixed 
  justify-between 
  w-full 
  bottom-0 
  z-40 
  flex 
  items-center 
  bg-white 
  border-t-[1px] 
  lg:hidden
"
    >
      {routes.map((item) => (
        <MobilItmes
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default MobilFooters;
