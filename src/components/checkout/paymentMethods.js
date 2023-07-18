import React from "react";
import usePaymentMethod from "../../hooks/usePaymentMethod";

const PaymentMethods = () => {
  const {plcaeOrder} = usePaymentMethod();
  return (
    <div className="mt-5">
      <div className="relative">
        <input
          className="peer hidden"
          type="radio"
          name="radio"
          defaultChecked
        />
        <span className="peer-checked:border-green-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
        <label className="peer-checked:border-2 peer-checked:border-green-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4">
          <div className="ml-8">
            <span className="mt-2 font-semibold text-base">
              CASH ON DELIVARY
            </span>
          </div>
        </label>
      </div>
      <button
        onClick={() => plcaeOrder()}
        class="mt-5 inline-flex items-center justify-center w-full px-5 py-3 max-sm:px-4 max-sm:py-3 text-sm font-bold text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
        fdprocessedid="hnw2au"
      >
        Place Order
      </button>
    </div>
  );
};

export default PaymentMethods;
