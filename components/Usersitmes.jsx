"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import axios from "axios";
import Avaters from "./Avaters";

function Usersitmes({ data }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then(() => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <div onClick={handleClick} className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-gray-50 focus-within:ring-4 rounded-lg  focus-within:ring-gray-300 transition" >
      <Avaters currentUser={data} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900">
              {data.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usersitmes;
