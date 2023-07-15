import { useMutation } from "@apollo/client";
import { debounce } from "lodash";
import { useState } from "react";
import { UPDATE_CART_QTY } from "../graphql/cart/updateCartQty";
import { useCallback } from "react";

const useCartCardItem = ({ qty }) => {
  const [quantity, setQuantity] = useState(qty);
  const [updateCart] = useMutation(UPDATE_CART_QTY);
  const cart = localStorage.getItem("cart");
  const version = localStorage.getItem("version");

  const updateQty = useCallback(
    debounce((id, qty) => {
      updateQuantityInCT(id, qty);
    }, 900),
    []
  );

  const updateQuantityInCT = async (id, qty) => {
    console.log("called");
    console.log("quantity from inside the function", qty);
    try {
      const { data } = await updateCart({
        variables: {
          data: {
            cart,
            version,
            id,
            quantity: qty,
          },
        },
      });
      console.log(data);
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
