import { signInWithPhoneNumber } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "./firebase";
import useLoginUsingMobile from "./talons/useSignup";

const Practcie = () => {
  const { register, handleSubmit } = useForm();

  const { onSignup, phoneNumber, onOTPVerify, setPhoneNumber, onCaptchVerify } =
    useLoginUsingMobile();

  const onSubmit = ({ email, password, phone }) => {
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // toast.success("OTP Sent succesfully");
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Failed to send OTP");
      });
  };

  return (
    <>
      <div>Practcie</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="EMAIL" />
        <input {...register("password")} placeholder="password" />
        <input {...register("phone")} placeholder="phone" />
        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit(onOTPVerify)}>
        <input {...register("otp")} placeholder="otp" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Practcie;
