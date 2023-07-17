import React from "react";
import { useCart } from "../../talons/useCart";
import Loader from "../loader/index";
import { size } from "lodash";
import { Link } from "react-router-dom";
import { getPrice } from "../priceCalculator";
import CartItemCard from "./cartItemCard";

const Cart = () => {
  const { cartItems, loading, removeCartItem, setCartItems } = useCart();

  console.log(cartItems);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (cartItems && size(cartItems.lineItems) > 0) {
    return (
      <div class="mt-32 mb-10 max-sm:mt-44">
        <h1 class="mb-10 text-center text-3xl font-bold text-gray-800">
          Your Bag
        </h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {cartItems.lineItems.map((item) => (
              <CartItemCard
                item={item}
                removeCartItem={removeCartItem}
                setCartItems={setCartItems}
              />
            ))}
          </div>
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">
                <span className="text-gray-500">$</span>{" "}
                {getPrice({
                  centAmount: cartItems.totalPrice.centAmount,
                  fractionDigits: cartItems.totalPrice.fractionDigits,
                })}
              </p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  <span className="text-gray-500">$</span>{" "}
                  {getPrice({
                    centAmount: cartItems.totalPrice.centAmount,
                    fractionDigits: cartItems.totalPrice.fractionDigits,
                  })}{" "}
                </p>
              </div>
            </div>
            <Link to="/checkout">
              <button class="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center flex justify-center flex-col items-center my-32">
        <svg
          height="130px"
          width="130px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="shopping-bag"
        >
          <path d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"></path>
        </svg>
        <p className="text-2xl font-bold py-2">Your Bag is Empty</p>
        <p className="text-base py-2">
          Looks like you haven’t added any items to the bag yet. Start shopping
          to fill it in.
        </p>
        <Link to="/">
          <button class="mt-6 rounded-md bg-green-500 py-3 font-medium text-blue-50 hover:bg-green-600 px-16 ">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }
};

export default Cart;
