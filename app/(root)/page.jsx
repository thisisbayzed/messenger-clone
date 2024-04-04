import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        {/* prezentation layer */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          src="/Images/logo.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sing in to your account
        </h2>
      </div>
      {/* authencation form */}
      <AuthForm />
    </div>
  );
}

export default Home;
