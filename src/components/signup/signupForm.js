import React from "react";
import size from "lodash/size";
import OtpForm from "./otpForm";
import useLoginUsingMobile from "../../talons/useSignup";
import Loader from "../loader/buttonLoader";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    onSignup,
    user,
    onOTPVerify,
    setUser,
    loading,
  } = useLoginUsingMobile();

  return (
    <>
      {size(user) === 0 ? (
        <form onSubmit={handleSubmit(onSignup)}>
          <div className="border-2 border-gray-200 p-2 rounded-xl mt-8 ">
            <input
              {...register("firstname", { required: true })}
              type="tel"
              className="outline-none ps-2 font-normal border-l-gray-700  w-full"
              placeholder="FirstName"
            />
          </div>
          <div className="border-2 border-gray-200 p-2 rounded-xl mt-6 ">
            <input
              {...register("lastname", { required: true })}
              type="tel"
              className="outline-none ps-2 font-normal border-l-gray-700  w-full"
              placeholder="LastName"
            />
          </div>
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
          <div className="flex border-2 border-gray-200 p-2 rounded-xl mt-6 ">
            <select
              {...register("countryCode")}
              className="outline-none border-none border-2 border-r-gray-600 bg-[#fff] font-[17px]  px-1 cursor-pointer"
            >
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
            </select>
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="outline-none ps-2 font-normal border-l-gray-700 w-full"
              placeholder="Phone number"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              type="submit"
            >
              {loading ? <Loader withText={true} size="small" /> : "GET OTP"}
            </button>
          </div>
        </form>
      ) : (
        <OtpForm
          user={user}
          onOTPVerify={onOTPVerify}
          setUser={setUser}
          loading={loading}
        />
      )}
    </>
  );
};

export default SignupForm;
