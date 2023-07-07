import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const useLoginMobile = () => {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
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
        toast.error("Failed to send OTP");
      });
  }

  function onOTPVerify(otp) {
    console.log("Hit");
    console.log(otp);
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setLoading(false);
        console.log(res);
        toast.success("User Login Successfully!!");
        nav("/");
      })
      .catch((err) => {
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
