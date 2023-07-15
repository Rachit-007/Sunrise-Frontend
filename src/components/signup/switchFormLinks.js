import React from "react";
import { Link } from "react-router-dom";

const SwitchFormLinks = ({ text, link }) => {
  return (
    <div className="mt-2 text-center">
      <p className="text-base font-normal text-gray-500">
        {text}
        <Link
          to={link}
          className="font-semibold text-primary-600 hover:underline"
        >
          {" "}
          {link == "/login" ? "Login" : "Sign Up"}
        </Link>
      </p>
    </div>
  );
};

export default SwitchFormLinks;
