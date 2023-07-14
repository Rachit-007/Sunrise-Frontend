import React, { useState } from "react";
import useMiniCart from "../../../talons/useMiniCart";
import OpenMiniCart from "./openMiniCart";

const MiniCart = () => {
  const { openMiniCart, setOpenMiniCart } = useMiniCart();

  return (
    <div className="relative">
      <button onClick={() => setOpenMiniCart(!openMiniCart)}>
        <div className="flex-col justify-center items-center mr-4 cursor-pointer text-gray-500 hover:text-gray-800">
          <svg
            className="h-7 w-8 leading-none stroke-current mb-0.5 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="mt-1 ">Cart</span>
        </div>
      </button>
      {openMiniCart ? (
        <div className="absolute">
          <OpenMiniCart setOpenMiniCart={setOpenMiniCart} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MiniCart;
     