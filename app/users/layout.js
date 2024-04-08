import getUsers from "@/actions/getUsers";
import Userslist from "@/components/Userslist";
import Sidebarlayout from "@/layouts/Sidebarlayout";
import React from "react";

async function Userslayout({ children }) {
  const Users = await getUsers();

  return (
    <Sidebarlayout>
      <div className="h-full">
        <Userslist users={Users} />
        {children}
      </div>
    </Sidebarlayout>
  );
}

export default Userslayout;
