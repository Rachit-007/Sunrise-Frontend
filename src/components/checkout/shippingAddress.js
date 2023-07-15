import React from "react";

const ShippingAddress = () => {
  return (
    <div>
      <form>
        <div className="flex-col my-5">
          <div>
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              First Name{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter First Name"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>
          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600 ">
              Last Name{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Last Name"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>
          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              Address{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Full Adress"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>
          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              Please Select Country{" "}
            </label>
            <select className="block mt-3 w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900">
              <option>India</option>
            </select>
          </div>

          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              State{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your State"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>
          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              City{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your City"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>

          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              Zip Code{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Zip Code"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>
          <div className="mt-4">
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              Phone Number{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Phone Number"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>
          <button className="mt-5 px-8 bg-green-500 py-2.5 rounded hover:bg-green-600 text-white font-bold">
            Ship Here
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
