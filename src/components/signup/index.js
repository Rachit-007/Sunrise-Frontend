import { Link } from "react-router-dom";
import FormTitle from "./formTitle";
import LoginUsingMobile from "./signupForm";
import SocialMedia from "./socialMedia";
import SwitchFormLinks from "./switchFormLinks";

const Signup = () => {
  return (
    <>
      <div className="flex mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 max-w-md mt-28  border-2 p-3 max-sm:border-none max-sm:mt-40 max-sm:shadow-none ">
        <div className="w-full px-6 py-8 md:px-8 ">
          <FormTitle title={"Sign Up"} />
          <LoginUsingMobile />
          <SocialMedia />
          <SwitchFormLinks text={"Already registered ?"} link={"/login"} />
        </div>
      </div>
    </>
  );
};

export default Signup;
