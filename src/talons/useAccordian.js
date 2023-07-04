import { useState } from "react";

const useAccordian = () => {
  const [shippingReturnsOpen, setShippingReturnsOpen] = useState(false);
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);

  /**
   * it will change the state variable which is related to the shipping returns
   */
  const toggleShippingReturns = () => {
    setShippingReturnsOpen(!shippingReturnsOpen);
  };

  /**
   *it will change the state variable which is related to the products details
   */
  const toggleProductDetails = () => {
    setProductDetailsOpen(!productDetailsOpen);
  };

  return {
    shippingReturnsOpen,
    toggleProductDetails,
    toggleShippingReturns,
    productDetailsOpen,
  };
};

export default useAccordian;
