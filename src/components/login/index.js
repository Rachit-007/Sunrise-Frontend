import React from "react";
import FormTitle from "../signup/formTitle";
import SocialMedia from "../signup/socialMedia";
import SwitchFormLinks from "../signup/switchFormLinks";
import { LoginForm } from "./loginForm";

const Login = () => {
  return (
    <>
      <div className="flex mx-auto overflow-hidden bg-white rounded-lg shadow-lg max-w-md mt-28 max-sm:border-none max-sm:mt-40 max-sm:shadow-none border-2 p-3 ">
        <div className="w-full px-6 py-8 md:px-8 ">
          <FormTitle title={"Login"} />
          <LoginForm />
          <SocialMedia />
          <SwitchFormLinks text={"Create an user ?"} link={"/signup"} />
        </div>
      </div>
    </>
  );
};

export default Login;
