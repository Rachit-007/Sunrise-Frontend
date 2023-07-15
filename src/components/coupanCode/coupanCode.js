import React from "react";

const CoupanCode = () => {
  return (
    <form class="my-10">
      <div class="my-7 sm:flex sm:space-x-2.5  md:flex-col lg:flex-row md:space-x-0 lg:space-x-2.5">
        <div class="flex-grow">
          <label for="" class="sr-only">
            {" "}
            Coupon code{" "}
          </label>
          <input
            type="text"
            id=""
            name=""
            placeholder="Enter coupon code"
            class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
            fdprocessedid="xhm9om"
          />
        </div>
        <div class="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
          <button
            type="submit"
            class="items-center justify-center w-full px-4 py-3 text-sm font-bold text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md inline- focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700"
            fdprocessedid="satsxk"
          >
            Apply coupon
          </button>
        </div>
      </div>
    </form>
  );
};

export default CoupanCode;
