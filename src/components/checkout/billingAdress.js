import { size } from "lodash";
import React from "react";
import useBillingAddress from "../../hooks/useBillingAddress";
import Address from "./common/address";
import DetailsForm from "./common/detailsForm";

const BillingAddress = ({ setStep, address, setCartItems }) => {
  const {
    billingAdress,
    setValue,
    handleSubmit,
    register,
    setBillingAddress,
    onSubmit,
  } = useBillingAddress(address, setStep, setCartItems);

  console.log(billingAdress)

  return (
    <>
      {size(billingAdress) > 0 ? (
        <Address
          setValue={setValue}
          addressDetails={billingAdress}
          address={address}
          setAddress={setBillingAddress}
        />
      ) : (
        <DetailsForm
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default BillingAddress;
