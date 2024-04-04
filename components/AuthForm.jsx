"use client";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";
import Buttons from "./Buttons";
import AuthSocialButtons from "./AuthSocialButtons";
import {BsGithub , BsGoogle} from "react-icons/bs";

function AuthForm() {
  const [varient, setVariant] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (varient === "Login") {
      setVariant("Register");
    } else {
      setVariant("Login");
    }
  }, [varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    if (varient === "Register") {
      // axios fetch call
    } else if (varient === "Login") {
      // Next auth login
    }
  };

  const socialAction = (action) => {
    setIsLoading(true);
    // Next auth social login
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {varient === "Register" && (
            <InputForm
              id="name"
              type="text"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
           <InputForm
              id="email"
              type="email"
              label="Email"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
              <InputForm
              id="password"
              type="password"
              label="Password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <div>
                <Buttons type="submit" disabled={isLoading} fullWidth >{varient === "Login" ? "Sign in" : "Register"}</Buttons>
            </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"/>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                    Or continue with
                </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButtons icon={<BsGithub />} onClick={() => socialAction("github")} />
            <AuthSocialButtons icon={<BsGoogle />} onClick={() => socialAction("google")} />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
         <div>{varient === "Login" ? "New to Messenger?" : "Already have an account?"}</div>
         <div onClick={toggleVariant} className="underline cursor-pointer">{varient === "Login" ? "Create an account" : "Login"}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
