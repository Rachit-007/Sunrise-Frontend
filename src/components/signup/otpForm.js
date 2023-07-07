import { useState } from "react";
import style from "../../assets/css/otp.module.css";
import OTPInput from "otp-input-react";
import Loader from "../loader/buttonLoader";
import { useLocation } from "react-router-dom";

const OtpForm = ({ user, onOTPVerify, setUser, loading }) => {
  const [otp, setOtp] = useState("");
  const path = useLocation();

  console.log(otp);

  return (
    <>
      <div class="mx-auto overflow-hidden bg-white rounded-lg  dark:bg-gray-800 max-w-md   p-7">
        <p className={`${style.form_head} font-bold text-3xl text-gray-700`}>
          Enter OTP
        </p>
        <div className={style.otp_container}>
          <div className="flex items-center  justify-center mt-4">
            <p
              className={`${style.phone_edit_grp} text-xl max-sm:text-base text-gray-600`}
            >
              {user.countryCode} {user.phone}
            </p>
            <div
              onClick={() => setUser({})}
              className="text-xs pl-4 text-green-600 cursor-pointer"
            >
              Change Number
            </div>
          </div>
          <div className={`${style.OtpInput} mt-8`}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              inputType="number"
              OTPLength={6}
              shouldAutoFocus
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="mt-5">
            <button
              disabled={otp.length < 6}
              className={`${style.form_continueBtn} bg-green-600 disabled:bg-gray-300 disabled:text-white disabled:cursor-default`}
              type="submit"
              onClick={
                path.pathname === "/signup"
                  ? () =>
                      onOTPVerify(
                        user.firstname,
                        user.lastname,
                        user.email,
                        user.password,
                        otp
                      )
                  : () => onOTPVerify(otp)
              }
            >
              {loading ? <Loader withText={true} size="small" /> : "VERIFY OTP"}
              <svg
                height="28"
                width="28"
                fill="#fff"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h48v48h-48z" fill="none" />
                <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z" />
              </svg>
            </button>
          </div>
          <div className={style.otpResend}>
            <span>
              Did'nt receive the OTP ?
              <button className="pl-3">Resend Otp</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpForm;
