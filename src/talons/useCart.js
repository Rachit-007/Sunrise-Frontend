import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_CART } from "../graphql/cart/getCart";
import { useEffect } from "react";
import { useState } from "react";
import { REMOVE_CART_ITEM } from "../graphql/cart/removeCartItem";
import { toast } from "react-toastify";
import { UPDATE_CART_QTY } from "../graphql/cart/updateCartQty";

export const useCart = () => {
  const [getCartDetails] = useLazyQuery(GET_CART);
  const cart = localStorage.getItem("cart");
  const version = localStorage.getItem("version");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [removeCart] = useMutation(REMOVE_CART_ITEM, {
    fetchPolicy: "network-only",
  });
  const [updateCart] = useMutation(UPDATE_CART_QTY, {
    fetchPolicy: "network-only",
  });

  const getCartData = async () => {
    try {
      const { data } = await getCartDetails({ variables: { data: { cart } } });
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

  return { cartItems, loading, removeCartItem, setCartItems };
};
