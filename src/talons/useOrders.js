import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ORDERS } from "../graphql/orders/getOrder";

const useOrders = () => {
  const { data: orderData, loading, error } = useQuery(GET_ORDERS);
  return { loading, orderData };
};

export default useOrders;
