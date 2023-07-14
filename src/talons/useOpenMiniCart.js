import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GET_CART } from "../graphql/cart/getCart";
import { REMOVE_CART_ITEM } from "../graphql/cart/removeCartItem";

const useOpenMiniCart = () => {
  const cart = localStorage.getItem("cart");
  const version = localStorage.getItem("version");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [getCartItems] = useLazyQuery(GET_CART, {
    fetchPolicy: "network-only",
  });
  const [removeCart] = useMutation(REMOVE_CART_ITEM, {
    fetchPolicy: "network-only",
  });

  const getCartData = async () => {
    try {
      const { data } = await getCartItems({ variables: { data: { cart } } });
      setCartItems(data.getCart);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const removeCartItem = async (lineItemId) => {
    try {
      let { data } = await removeCart({
        variables: { data: { cart, version, lineItemId } },
      });
      console.log(data);
      setCartItems(data.removeCartItem);
      toast.success("Item removed successfully");
      localStorage.setItem("version", data.removeCartItem.version);
    } catch (err) {
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

  return {
    getCartData,
    setLoading,
    loading,
    removeCartItem,
    cartItems,
  };
};

export default useOpenMiniCart;
