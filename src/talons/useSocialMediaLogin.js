import { useMutation } from "@apollo/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { SIGNUP_GOOGLE } from "../graphql/user/signupGoogle";

const useSocialMediaLogin = () => {
  const [signupGoogle] = useMutation(SIGNUP_GOOGLE);
  const nav = useNavigate();

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
      const { data } = await signupGoogle({
        variables: { input: user.accessToken },
      });
      console.log(data);
      if (data.addUserUsingGoogle) {
        nav("/");
        toast.success("User added successfully!!");
      } else {
        toast.error("Cant create user!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { signinWithGoogle };
};

export default useSocialMediaLogin;
