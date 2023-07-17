import React from "react";
import useShippingMethods from "../../hooks/useShippingMethods";
import Loader from "../loader";
import { getPrice } from "../priceCalculator";

const ShippingMethod = ({ setStep, shippingInfo, setCartItems, step }) => {
  const {
    handleChange,
    shippingData,
    loading,
    userShippingMethod,
    setUserShippingMethod,
  } = useShippingMethods(shippingInfo, setStep, setCartItems, step);

  if (loading) {
    return <Loader />;
  }

  console.log(userShippingMethod);

  return (
    <>
      {userShippingMethod ? (
        <div className="flex justify-between items-center mt-8">
          <div>
            <div className="w-14 inline-flex justify-center items-center  object-contain rounded-md font-bold text-gray-700 whitespace-nowrap">
              ${" "}
              {getPrice({
                centAmount: userShippingMethod.price.centAmount,
                fractionDigits: userShippingMethod.price.fractionDigits,
              })}
              .00
            </div>
            <span className="font-semibold text-base ml-3">
              {userShippingMethod.shippingMethodName}
            </span>
          </div>
          <button
            onClick={() => {
              setUserShippingMethod(null);
            }}
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold max-sm:px-4 max-sm:py-3 text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
          >
            Change
          </button>
        </div>
      ) : (
        <div className="mt-2">
          <form className="mt-5 grid gap-6">
            {shippingData?.getShippingMethods.map((method) => (
              <div className="relative">
                <input
                  className="peer hidden"
                  id={method.id}
                  type="radio"
                  name="radio"
                  onChange={() => handleChange(method.id)}
                  defaultChecked={method.id === shippingInfo.shippingMethod.id}
                />

                <span className="peer-checked:border-green-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />

                <label
                  className="peer-checked:border-2 peer-checked:border-green-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor={method.id}
                >
                  <div className="w-14 inline-flex justify-center items-center  object-contain rounded-md font-bold text-gray-700 whitespace-nowrap">
                    ${" "}
                    {getPrice({
                      centAmount:
                        method.zoneRates[0].shippingRates[0].price.centAmount,
                      fractionDigits:
                        method.zoneRates[0].shippingRates[0].price
                          .fractionDigits,
                    })}
                    .00
                  </div>

                  <div className="ml-8">
                    <span className="mt-2 font-semibold text-base">
                      {method.name}
                    </span>

                    <p className="text-slate-500 text-sm leading-6">
                      {method.localizedDescription?.en}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </form>
        </div>
      )}
    </>
  );
};

export default ShippingMethod;
