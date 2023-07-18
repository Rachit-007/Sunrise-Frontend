import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ADD_SHIPPING_METHODS } from "../graphql/cart/addShippingMethod";
import { GET_SHIPPING_METHODS } from "../graphql/cart/getShippingMethod";

const useShippingMethods = (shippingInfo, setStep, setCartItems, step) => {
  const {
    data: shippingData,
    loading,
    error,
  } = useQuery(GET_SHIPPING_METHODS, {
    variables: { data: { country: "US" } },
  });
  const [addShippingMethod] = useMutation(ADD_SHIPPING_METHODS);

  const [userShippingMethod, setUserShippingMethod] = useState(shippingInfo);

  const handleChange = async (id) => {
    try {
      let { data } = await addShippingMethod({
        variables: {
          input: {
            cart: localStorage.getItem("cart"),
            id,
            version: localStorage.getItem("version"),
          },
        },
      });
      console.log(data);
      if (step > 4) {
        console.log("hit");
        setStep(5);
      } else {
        setStep(4);
      }
      localStorage.setItem("version", data.addShippingMethods.version);
      setUserShippingMethod(data.addShippingMethods.shippingInfo);
      setCartItems(data.addShippingMethods);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (shippingInfo) {
      setStep(4);
    }
  }, []);

  return {
    handleChange,
    shippingData,
    loading,
    error,
    userShippingMethod,
    setUserShippingMethod,
  };
};

export default useShippingMethods;
