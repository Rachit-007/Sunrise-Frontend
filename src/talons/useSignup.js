import { useMutation } from "@apollo/client";
import {
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { CHECK_USER } from "../graphql/user/checkUser";
import { ADD_USER } from "../graphql/user/createUser";

const useSignup = () => {
  const [addUser] = useMutation(ADD_USER);
  const [chekUser] = useMutation(CHECK_USER);
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState({});
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  /**
   * this function will be called to verify the user by recaptcha when user click on get otp
   */

  /**
   *
   * @param {object} param
   * this function will be called when the user click on the get otp and will be respinsible for getting otp
   */

  async function onSignup({
    firstname,
    lastname,
    email,
    password,
    countryCode,
    phone,
  }) {
    setLoading(true);
    try {
      let { data } = await chekUser({
        variables: {
          input: {
            email: email,
            phone: countryCode + phone,
          },
        },
      });
      console.log(data);
      if (!data.checkUser.createUser) {
        setLoading(false);
        return toast.error("User Already Exist!!");
      }
    } catch (err) {
      console.log(err);
    }
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {},
          "expired-callback": () => {},
        },
        auth
      );
    }
    const appVerifier = window.recaptchaVerifier;
    const formatPh = countryCode + phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setUser({ firstname, lastname, email, password, phone, countryCode });
        setLoading(false);
        toast.success("OTP Sent succesfully");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        if (error.code === "auth/invalid-phone-number") {
          toast.error("Invalid PhoneNumber!!");
        } else {
          toast.error("Failed to send OTP!!");
        }
      });
  }

  /**
   *
   * @param {number} otp
   * this function will verify the otp
   */

  function onOTPVerify(firstname, lastname, email, password, otp) {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        const user = auth.currentUser;
        await linkEmailPasswordProvider(
          user,
          email,
          password,
          firstname,
          lastname
        );
        setLoading(false);
        nav("/");
        toast.success("User Created Successfully!!");
      })
      .catch((err) => {
        setLoading(false);
        if (err.code == "auth/invalid-verification-code") {
          toast.error("Wrong OTP!!");
        } else if (err.code == "auth/code-expired") {
          toast.error("OTP Expired Please Try Again!!");
        }
      });
  }

  /**
   *function is responsible for link email password with the mobile number and also adds user to merchant center
   * @param {string} user
   * @param {string} email
   * @param {string} password
   * @param {string} firstname
   * @param {string} lastname
   */
  async function linkEmailPasswordProvider(
    user,
    email,
    password,
    firstname,
    lastname
  ) {
    const credential = EmailAuthProvider.credential(email, password);
    try {
      await linkWithCredential(user, credential);
      console.log("Email/password provider linked successfully", user);
      await addUser({
        variables: { input: { token: user.accessToken, firstname, lastname } },
      });
    } catch (error) {
      console.log("Error linking email/password provider:", error);
      throw error;
    }
  }

  return {
    register,
    onSignup,
    handleSubmit,
    user,
    onOTPVerify,
    setUser,
    loading,
  };
};

export default useSignup;
