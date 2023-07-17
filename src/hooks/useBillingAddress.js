import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ADD_BILLING_ADDRESS } from "../graphql/cart/addBillingAddress";

const useBillingAddress = (address, setStep, setCartItems) => {
  const { register, handleSubmit, setValue } = useForm();
  const [billingAdress, setBillingAddress] = useState(address);
  const [addCustomerBillingAddress] = useMutation(ADD_BILLING_ADDRESS);

  const onSubmit = async ({
    firstName,
    lastName,
    countryCode,
    phone,
    country,
    postalCode,
    city,
    building,
  }) => {
    let mobile = countryCode + phone;
    try {
      const { data } = await addCustomerBillingAddress({
        variables: {
          input: {
            cart: localStorage.getItem("cart"),
            version: localStorage.getItem("version"),
            firstName,
            lastName,
            mobile,
            building,
            country,
            city,
            postalCode,
          },
        },
      });
      localStorage.setItem("version", data.addBillingAddress.version);
      setCartItems(data.addBillingAddress);
      console.log(data);
      setBillingAddress(data.addBillingAddress.billingAddress);
      setStep(5);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (address) {
      setStep(5);
    }
  }, []);

  return {
    billingAdress,
    setValue,
    register,
    handleSubmit,
    setBillingAddress,
    onSubmit,
  };
};

export default useBillingAddress;
