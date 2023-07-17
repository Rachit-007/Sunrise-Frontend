import React from "react";

const DetailsForm = ({ handleSubmit, onSubmit, register }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("firstName")}
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
              {...register("lastName")}
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
              {...register("building")}
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
          <select
            className="block mt-3 w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
            {...register("country")}
          >
            <option value="US">United Stated Of America (USA)</option>
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
              {...register("state")}
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
              {...register("city")}
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
              {...register("postalCode")}
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
          <div className="flex border border-gray-300 p-2 rounded-md mt-4">
            <select
              {...register("countryCode")}
              className="outline-none border-none border-2 border-r-gray-600 bg-[#fff] font-[15px]  px-1 cursor-pointer"
            >
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
            </select>
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="block w-full py-1 pl-2  text-sm font-normal text-gray-900 placeholder-gray-500 rounded-md bg-gray-50 outline-none"
              placeholder="Phone number"
            />
          </div>
        </div>
        <button className="mt-5 px-8 bg-green-500 py-2.5 rounded hover:bg-green-600 text-white font-bold">
          Ship Here
        </button>
      </div>
    </form>
  );
};

export default DetailsForm;
