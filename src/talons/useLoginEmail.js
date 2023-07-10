import { useMutation } from "@apollo/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { CHECK_USER_FOR_LOGIN } from "../graphql/user/checkUserForLogin";
import { GET_ACCESS_TOKEN } from "../graphql/user/getToken";

const useLoginEmail = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const [checkUser] = useMutation(CHECK_USER_FOR_LOGIN);
  const [getToken] = useMutation(GET_ACCESS_TOKEN);

  /**
   *function is responsible for login using email and password
   * @param {{email:String,password:String}} param0
   * @returns navigates to the home page when user log in succesfully
   */
  async function onLoginWithEmail({ email, password }) {
    setLoading(true);
    try {
      const { data } = await checkUser({
        variables: { data: { email: email } },
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
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setLoading(false);
        console.log(res);
        const { data } = await getToken({
          variables: { input: res._tokenResponse.idToken },
        });
        console.log(data);
        toast.success("User Login Successfully!!");
        nav("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setLoading(false);
          return toast.error("Wrong Credentials!!");
        }
        console.log(error);
      });
  }

  return { register, handleSubmit, onLoginWithEmail, loading };
};

export default useLoginEmail;
