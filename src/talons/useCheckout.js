import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { GET_CART } from "../graphql/cart/getCart";

const useCheckout = () => {
  const cart = localStorage.getItem("cart");
  const version = localStorage.getItem("version");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [step, setStep] = useState(1);
  const [getCartDetails] = useLazyQuery(GET_CART);

  const getCartData = async () => {
    try {
      const { data } = await getCartDetails({
        variables: { data: { cart } },
      });
      setCartItems(data.getCart);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (cart) {
      getCartData();
    } else {
      setLoading(false);
    }
  }, []);
  return { cartItems, loading, step, setStep };
};

export default useCheckout;
