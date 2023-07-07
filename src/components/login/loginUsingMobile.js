import React from "react";
import useLoginMobile from "../../talons/useLoginMobile";
import size from "lodash/size";
import OtpForm from "../signup/otpForm";
import Loader from "../loader/buttonLoader";

const LoginUsingMobile = () => {
  const {
    register,
    handleSubmit,
    onLoginWithMobile,
    user,
    setUser,
    loading,
    onOTPVerify,
  } = useLoginMobile();
  return (
    <>
      {size(user) == 0 ? (
        <form onSubmit={handleSubmit(onLoginWithMobile)}>
          <div>
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
          </div>
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              {loading ? <Loader withText={true} size="small" /> : "GET OTP"}
            </button>
          </div>
        </form>
      ) : (
        <OtpForm
          user={user}
          setUser={setUser}
          loading={loading}
          onOTPVerify={onOTPVerify}
        />
      )}
    </>
  );
};

export default LoginUsingMobile;
