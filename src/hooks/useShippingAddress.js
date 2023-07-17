import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ADD_SHIPPING_ADDRESS } from "../graphql/cart/addShippingAddress";

const useShippingAddress = (setStep, address, setCartItems, step) => {
  const { register, handleSubmit, setValue } = useForm();
  const [addCustomerShippingAddress] = useMutation(ADD_SHIPPING_ADDRESS);
  const [shippingAdress, setShippingAddress] = useState(address);

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
      const { data } = await addCustomerShippingAddress({
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
      localStorage.setItem("version", data.addShippingAddress.version);
      console.log(data);
      console.log(step);
      setCartItems(data.addShippingAddress);
      setShippingAddress(data.addShippingAddress.shippingAddress);
      if (step > 2) {
        setStep(4);
      } else if (step > 4) {
        setStep(5);
      } else {
        setStep(3);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (address) {
      setStep(3);
    }
  }, []);

  return {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    setShippingAddress,
    shippingAdress,
  };
};

export default useShippingAddress;
