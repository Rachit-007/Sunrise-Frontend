import { size } from "lodash";
import React from "react";
import useBillingAddress from "../../hooks/useBillingAddress";
import Address from "./common/address";
import DetailsForm from "./common/detailsForm";

const BillingAddress = ({
  setStep,
  shipppingAddressInfo,
  billingAddressInfo,
  setCartItems,
}) => {
  const {
    billingAdress,
    setValue,
    handleSubmit,
    register,
    setBillingAddress,
    onSubmit,
  } = useBillingAddress(
    shipppingAddressInfo,
    billingAddressInfo,
    setStep,
    setCartItems
  );

  console.log(billingAddressInfo);

  return (
    <>
      {size(billingAdress) > 0 ? (
        <Address
          setValue={setValue}
          addressDetails={billingAdress}
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
