import React from "react";
import { Link } from "react-router-dom";
import useOrders from "../../talons/useOrders";
import Loader from "../loader";

const Orders = () => {
  const { loading, orderData } = useOrders();

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (orderData && orderData.getOrders.length > 0) {
    console.log(orderData);
    return <div className="mt-96">{JSON.stringify(orderData.getOders)}</div>;
  } else if (orderData && orderData.getOrders.length === 0) {
    return (
      <>
        <div className="text-center flex justify-center flex-col items-center my-32">
          <svg
            height="130px"
            width="130px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="shopping-bag"
          >
            <path d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"></path>
          </svg>
          <p className="text-2xl font-bold py-2">Your Bag is Empty</p>
          <p className="text-base py-2">
            Looks like you haven’t added any items to the bag yet. Start
            shopping to fill it in.
          </p>
          <Link to="/">
            <button class="mt-6 rounded-md bg-green-500 py-3 font-medium text-blue-50 hover:bg-green-600 px-16 ">
              Continue Shopping
            </button>
          </Link>
        </div>
      </>
    );
  }
};

export default Orders;
