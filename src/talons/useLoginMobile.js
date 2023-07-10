import { useMutation } from "@apollo/client";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { CHECK_USER_FOR_LOGIN } from "../graphql/user/checkUserForLogin";
import { GET_ACCESS_TOKEN } from "../graphql/user/getToken";

const useLoginMobile = () => {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const [getToken] = useMutation(GET_ACCESS_TOKEN);
  const [checkUser] = useMutation(CHECK_USER_FOR_LOGIN);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  /**
   *function is responsible for login using phone number
   * @param {{countryCode:String,phone:String}} param0
   * @returns navigates to the home page when user log in succesfully
   */
  async function onLoginWithMobile({ countryCode, phone }) {
    setLoading(true);
    const formatPh = countryCode + phone;
    try {
      const { data } = await checkUser({
        variables: { data: { phone: formatPh } },
      });
      console.log(data);
      if (!data.checkUserLogin.loginUser) {
        setLoading(false);
        return toast.error("Account not found Please Signup First!!!");
      }
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );
    }
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setUser({ phone, countryCode });
        setLoading(false);
        toast.success("OTP Sent succesfully");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-phone-number") {
          toast.error("Invalid PhoneNumber!!");
          setLoading(false);
        } else {
          toast.error("Failed to send OTP");
          setLoading(false);
        }
      });
  }

  /**
   *when user enters the otp it will be checked here
   * @param {string} otp
   */
  function onOTPVerify(otp) {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setLoading(false);
        toast.success("User Login Successfully!!");
        nav("/");
        const { data } = await getToken({
          variables: { input: res._tokenResponse.idToken },
        });
        console.log(data);
      })
      .catch((err) => {
        if (err.code == "auth/invalid-verification-code") {
          toast.error("Wrong OTP!!");
          setLoading(false);
        } else if (err.code == "auth/code-expired") {
          toast.error("OTP Expired Please Try Again!!");
          setLoading(false);
        }
        console.log(err);
      });
  }

  return {
    register,
    handleSubmit,
    onLoginWithMobile,
    user,
    setUser,
    loading,
    onOTPVerify,
  };
};

export default useLoginMobile;
