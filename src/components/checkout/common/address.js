import React from "react";

const Address = ({ setValue, addressDetails, address, setAddress }) => {
  return (
    <div className="mt-8 flex justify-between">
      <div>
        <div className="flex gap-2 font-bold text-gray-800 mb-2 text-lg">
          <h1>{addressDetails.firstName}</h1>
          <h1>{addressDetails.lastName}</h1>
        </div>
        <div className="text-gray-700 text-base">
          <h1>{addressDetails.building}</h1>
          <span>
            {addressDetails.city} ,{addressDetails.state}{" "}
            {addressDetails.postalCode}
          </span>
          <h1>{addressDetails.mobile}</h1>
        </div>
      </div>
      <div>
        <button
          className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold max-sm:px-4 max-sm:py-3 text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
          onClick={() => {
            setAddress(null);
            setValue("firstName", address.firstName);
            setValue("lastName", address.lastName);
            setValue("building", address.building);
            setValue("phone", address.mobile.slice(3, address.mobile.length));
            setValue("city", address.city);
            setValue("postalCode", address.postalCode);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Address;
