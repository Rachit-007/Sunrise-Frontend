import React from "react";
import { getPrice } from "../priceCalculator";
import useCartCardItem from "../../talons/useCartCardItem";

const CartItemCard = ({ item, removeCartItem, setCartItems }) => {
  const { incQty, decQty, quantity, updateQty } = useCartCardItem({
    qty: item.quantity,
    setCartItems,
  });
  return (
    <>
      <div class="justify-between relative mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={item.variant.images[0].url}
          class="w-full rounded-lg sm:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{item.name.en}</h2>
            <p class="mt-1 text-base ">
              <span className="text-gray-500">$</span>{" "}
              <span className="text-black">
                {getPrice({
                  centAmount: item.price.value.centAmount,
                  fractionDigits: item.price.value.fractionDigits,
                })}
              </span>
            </p>
          </div>
          <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <button
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-blue-50"
                onClick={() => decQty(item.id)}
              >
                {" "}
                -{" "}
              </button>
              <div
                class="h-8 w-8 border bg-white text-center text-xs outline-none flex justify-center items-center"
                type="number"
                value="2"
                min="1"
              >
                {quantity}
              </div>
              <button
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-blue-50"
                onClick={() => {
                  incQty(item.id);
                }}
              >
                {" "}
                +
              </button>
            </div>
            <div class="space-x-4">
              <p class="text-lg font-bold">
                <span className="text-gray-500">$</span>{" "}
                {getPrice({
                  centAmount: item.totalPrice.centAmount,
                  fractionDigits: item.totalPrice.fractionDigits,
                })}
              </p>
              <div
                className="absolute bottom-10 right-10 cursor-pointer font-bold text-red-500 hover:text-red-600"
                onClick={() => removeCartItem(item.id)}
              >
                Remove Item
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
