import Sidebarlayout from "@/layouts/Sidebarlayout";
import React from "react";

function Userslayout({ children }) {
  return (
    <Sidebarlayout>
      <div className="h-full">{children}</div>
    </Sidebarlayout>
  );
}

export default Userslayout;
