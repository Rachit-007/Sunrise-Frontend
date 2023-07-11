import { useMutation } from "@apollo/client";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { CHECK_FOR_GOOGLE } from "../graphql/user/signupGoogle";

const useSocialMediaLogin = () => {
  const nav = useNavigate();
  const path = useLocation();
  const [checkUserForGoogle, { error }] = useMutation(CHECK_FOR_GOOGLE);

  /**
   *
   *
   * @return {*} sets token in the cookie
   */
  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    try {
      const results = await signInWithRedirect(auth, provider);
      const { data } = await checkUserForGoogle({
        variables: { input: results._tokenResponse.idToken },
      });
      console.log(data);
      if (data.addUserGoogle.createUser === true) {
        nav("/");
        return toast.success("User created successfully!!!");
      }
      if (data.addUserGoogle.createUser === false) {
        return toast.error("User already exists!!!");
      }
      if (data.addUserGoogle.loginUser === true) {
        nav("/");
        return toast.success("Login success!");
      }
      if (data.addUserGoogle.loginUser === false) {
        return toast.success("Failed to ogin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { signinWithGoogle };
};

export default useSocialMediaLogin;
