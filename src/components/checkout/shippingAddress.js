import { size } from "lodash";
import React from "react";
import useShippingAddress from "../../hooks/useShippingAddress";
import Address from "./common/address";
import DetailsForm from "./common/detailsForm";

const ShippingAddress = ({ setStep, address, setCartItems, step }) => {
  const {
    register,
    shippingAdress,
    setShippingAddress,
    handleSubmit,
    setValue,
    onSubmit,
  } = useShippingAddress(setStep, address, setCartItems, step);

  console.log(shippingAdress);

  return (
    <div>
      {size(shippingAdress) > 0 ? (
        <Address
          setValue={setValue}
          addressDetails={shippingAdress}
          address={address}
          setAddress={setShippingAddress}
        />
      ) : (
        <DetailsForm
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default ShippingAddress;
