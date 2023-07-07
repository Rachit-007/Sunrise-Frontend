import React, { useState } from "react";
import LoginUsingEmail from "./loginUsingEmail";
import LoginUsingMobile from "./loginUsingMobile";

export const LoginForm = () => {
  const [mobile, setMobile] = useState(true);

  return (
    <>
      <div className="flex my-8 border-2 rounded-lg text-gray-600">
        <div
          className={`w-1/2 text-center py-2.5 cursor-pointer  font-bold  ${
            mobile && `bg-green-700 rounded-lg text-white duration-300`
          } `}
          onClick={() => setMobile(true)}
        >
          Mobile
        </div>
        <div
          className={`w-1/2 text-center py-2.5 cursor-pointer font-bold ${
            !mobile && `bg-green-700 rounded-lg text-white duration-300`
          }`}
          onClick={() => {
            setMobile(false);
          }}
        >
          Email
        </div>
      </div>
      {!mobile ? <LoginUsingEmail /> : <LoginUsingMobile />}
    </>
  );
};
