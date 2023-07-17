import { useMutation } from "@apollo/client";
import { debounce } from "lodash";
import { useState } from "react";
import { UPDATE_CART_QTY } from "../graphql/cart/updateCartQty";
import { useCallback } from "react";

const useCartCardItem = ({ qty, setCartItems }) => {
  const [quantity, setQuantity] = useState(qty);
  const [updateCart] = useMutation(UPDATE_CART_QTY, {
    fetchPolicy: "no-cache",
  });
  const cart = localStorage.getItem("cart");
  const version = localStorage.getItem("version");
  console.log("version", version);

  const updateQty = useCallback(
    debounce((id, qty) => {
      updateQuantityInCT(id, qty);
    }, 600),
    []
  );

  const updateQuantityInCT = async (id, qty) => {
    try {
      const { data } = await updateCart({
        variables: {
          data: {
            cart,
            version: localStorage.getItem("version"),
            id,
            quantity: qty,
          },
        },
      });
      console.log(data);
      setCartItems(data.updateCart);

      localStorage.setItem("version", data.updateCart.version);
    } catch (err) {
      console.log(err);
    }
  };

  const incQty = (id) => {
    setQuantity(quantity + 1);
    updateQty(id, quantity + 1);
  };

  const decQty = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQty(id, quantity - 1);
    }
  };

  return { incQty, decQty, quantity, updateQty };
};

export default useCartCardItem;
