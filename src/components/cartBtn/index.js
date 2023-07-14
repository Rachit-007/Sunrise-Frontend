import React, { useState } from "react";
import useAddToCart from "../../talons/useAddToCart";

export const CartBtn = ({ height, width, productId }) => {
  const { increment, decrement, cartQty, setCartQty } = useAddToCart({
    productId,
  });

  return (
    <div>
      {cartQty > 0 ? (
        <div className="flex items-center justify-between ">
          <button
            onClick={() => decrement()}
            className="bg-green-600 rounded-full h-10 w-10 font-bold text-xl text-white hover:bg-green-800"
          >
            -
          </button>
          <span className="px-4 font-semibold text-xl">{cartQty}</span>
          <button
            onClick={() => increment()}
            className="bg-green-600 rounded-full h-10 w-10 font-bold text-xl text-white hover:bg-green-800"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => increment()}
          className={`flex ml-auto text-white z-50 bg-green-600 border-0 py-${height} px-${width} focus:outline-none hover:bg-green-800 rounded`}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};
