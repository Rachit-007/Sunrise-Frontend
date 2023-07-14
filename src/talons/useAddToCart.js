import { useState } from "react";

const useAddToCart = ({ productId }) => {
  const [cartQty, setCartQty] = useState(0);

  const increment = () => {
    setCartQty(cartQty + 1);
  };

  const decrement = () => {
    setCartQty(cartQty - 1);
  };

  return { increment, decrement, cartQty, setCartQty };
};

export default useAddToCart;
