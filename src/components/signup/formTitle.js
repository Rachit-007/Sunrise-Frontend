import React from "react";

const FormTitle = ({ title }) => {
  return (
    <div>
      <div className="flex justify-between mx-auto">
        <p className=" text-2xl text-center text-gray-600 font-bold ">
          {title}
        </p>
        <img
          className="w-auto h-7 sm:h-8"
          src="https://sunrise.commercetools.com/img/logo.6528bde1.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FormTitle;
