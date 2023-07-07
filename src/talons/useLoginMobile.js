import { useMutation } from "@apollo/client";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { GET_ACCESS_TOKEN } from "../graphql/user/getToken";

const useLoginMobile = () => {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const [getToken] = useMutation(GET_ACCESS_TOKEN);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  async function onLoginWithMobile({ countryCode, phone }) {
    setLoading(true);
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
    const formatPh = countryCode + phone;

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
        } else {
          toast.error("Failed to send OTP");
        }
      });
  }

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
        } else if (err.code == "auth/code-expired") {
          toast.error("OTP Expired Please Try Again!!");
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
