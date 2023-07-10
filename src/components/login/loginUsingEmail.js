import React from "react";
import useLoginEmail from "../../talons/useLoginEmail";
import Loader from "../loader/buttonLoader";

const LoginUsingEmail = () => {
  const { register, handleSubmit, onLoginWithEmail, loading } = useLoginEmail();

  return (
    <>
      <form onSubmit={handleSubmit(onLoginWithEmail)}>
        <div className="border-2 border-gray-200 p-2 rounded-xl mt-6 ">
          <input
            {...register("email", { required: true })}
            type="tel"
            className="outline-none ps-2 font-normal border-l-gray-700  w-full"
            placeholder="Email"
          />
        </div>
        <div className="border-2 border-gray-200 p-2 rounded-xl mt-6">
          <input
            {...register("password", { required: true })}
            type="tel"
            className="outline-none ps-2 font-normal border-l-gray-700  w-full"
            placeholder="Password"
          />
        </div>
        <div className="mt-6">
          <button
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            type="submit"
          >
            {loading ? <Loader withText={true} size="small" /> : "LOGIN"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginUsingEmail;
