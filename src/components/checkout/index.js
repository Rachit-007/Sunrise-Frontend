import { Link } from "react-router-dom";
import useCheckout from "../../talons/useCheckout";
import Loader from "../loader";
import { size } from "lodash";
import CoupanCode from "../coupanCode/coupanCode";
import { getPrice } from "../priceCalculator";
import CreateAccount from "./createAccount";
import ShippingAddress from "./shippingAddress";
import ShippingMethod from "./shippingMethods";
import BillingAddress from "./billingAdress";
import PaymentMethods from "./paymentMethods";
import ChekcoutCart from "./checkoutCart";

export const CheckOut = () => {
  const { cartItems, loading, step, setStep, setCartItems } = useCheckout();

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  console.log("------------index------", cartItems.billingAddress);
  console.log(cartItems);

  if (cartItems && size(cartItems.lineItems) > 0) {
    return (
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-32 max-sm:mt-40">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-bold text-gray-900">CHECKOUT</h1>
          <span class="px-2 py-1 ml-4 text-xs font-bold tracking-widest uppercase bg-gray-400 rounded-full rounded-r-nonepy-1 text-gray-50">
            {" "}
            {cartItems.lineItems.length} Items{" "}
          </span>
        </div>

        <div class="max-w-6xl mx-auto mt-8 md:mt-12 ">
          <div class="bg-white rounded-xl">
            <div class="flex md:grid-cols-2 gap-4 max-sm:block ">
              <div class="px-5 py-6 bg-gray-100 md:px-8 rounded-lg shadow h-fit w-1/2 max-sm:w-full">
                <div className="flex justify-between">
                  <p className="font-bold pt-3">
                    <span className="font-bold">
                      {/* {cartItems.lineItems.length} */}
                      ORDER SUMMARY
                    </span>{" "}
                  </p>
                  <Link to="/cart">
                    <button className="px-8 py-2.5 font-bold bg-green-500 text-white mb-5 rounded hover:bg-green-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <hr class="mb-6 border-gray-200" />
                <div class="flow-root">
                  <ul class="divide-y divide-gray-200 -my-7">
                    {cartItems.lineItems.map((item) => (
                      <ChekcoutCart item={item} />
                    ))}
                  </ul>
                </div>
                <hr class="mt-6 border-gray-200" />

                <ul class="mt-6 space-y-3">
                  <li class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-600">Sub total</p>
                    <p class="text-sm font-medium text-gray-600">
                      <span className="text-gray-500">$</span>{" "}
                      {step > 3
                        ? getPrice({
                            centAmount: cartItems.totalPrice.centAmount,
                            fractionDigits: cartItems.totalPrice.fractionDigits,
                          }) -
                          getPrice({
                            centAmount: cartItems.shippingInfo.price.centAmount,
                            fractionDigits:
                              cartItems.shippingInfo.price.fractionDigits,
                          })
                        : getPrice({
                            centAmount: cartItems.totalPrice.centAmount,
                            fractionDigits: cartItems.totalPrice.fractionDigits,
                          })}
                    </p>
                  </li>
                  {step > 3 && (
                    <li class="flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-600">
                        Shipping Charges
                      </p>
                      <p class="text-sm font-medium text-gray-600">
                        <span className="text-gray-500">$</span>{" "}
                        {getPrice({
                          centAmount: cartItems.shippingInfo.price.centAmount,
                          fractionDigits:
                            cartItems.shippingInfo.price.fractionDigits,
                        })}
                        .00
                      </p>
                    </li>
                  )}
                  <CoupanCode />
                  <hr class="mt-6 border-gray-200" />

                  <li class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-sm font-bold text-gray-900">
                      <span className="text-gray-500">$</span>{" "}
                      {getPrice({
                        centAmount: cartItems.totalPrice.centAmount,
                        fractionDigits: cartItems.totalPrice.fractionDigits,
                      })}
                    </p>
                  </li>
                </ul>
              </div>

              <div class="px-5 py-6 md:px-8 rounded-lg shadow w-2/3 max-sm:w-full max-sm:mt-5">
                <div class="flow-root">
                  <div class="-my-6 divide-y divide-gray-200">
                    <CreateAccount
                      setStep={setStep}
                      email={cartItems.customerEmail}
                      setCartItems={setCartItems}
                    />
                    <div class="py-6">
                      <h2
                        class={`font-bold  text-xl uppercase ${
                          step > 1 ? "text-black" : "text-gray-500"
                        }`}
                      >
                        Shipping Address
                      </h2>
                      {step > 1 && (
                        <ShippingAddress
                          setStep={setStep}
                          step={step}
                          address={cartItems.shippingAddress}
                          setCartItems={setCartItems}
                        />
                      )}
                    </div>
                    <div class="py-6">
                      <h2
                        class={`font-bold  text-xl uppercase ${
                          step > 2 ? "text-black" : "text-gray-500"
                        }`}
                      >
                        Shipping Methods
                        {step > 2 && (
                          <ShippingMethod
                            setStep={setStep}
                            shippingInfo={cartItems.shippingInfo}
                            step={step}
                            setCartItems={setCartItems}
                          />
                        )}
                      </h2>
                    </div>
                    <div class="py-6">
                      <h2
                        class={`font-bold  text-xl uppercase ${
                          step > 3 ? "text-black" : "text-gray-500"
                        }`}
                      >
                        Billing Information
                      </h2>
                      {step > 3 && (
                        <BillingAddress
                          setStep={setStep}
                          shipppingAddressInfo={cartItems.shippingAddress}
                          billingAddressInfo={cartItems.billingAddress}
                          setCartItems={setCartItems}
                        />
                      )}
                    </div>

                    <div class="py-6">
                      <h2
                        class={`font-bold  text-xl uppercase ${
                          step > 4 ? "text-black" : "text-gray-500"
                        }`}
                      >
                        Payment Method
                      </h2>
                      {step > 4 && (
                        <PaymentMethods
                          setStep={setStep}
                          address={cartItems.billingAddress}
                          setCartItems={setCartItems}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
