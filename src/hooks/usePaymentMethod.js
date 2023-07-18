import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ORDER_PLACED } from "../graphql/cart/oderPlaced";

const usePaymentMethod = () => {
  const [plcaeOrderQuery] = useMutation(ORDER_PLACED);
  const nav = useNavigate();

  const plcaeOrder = async () => {
    const { data } = await plcaeOrderQuery({
      variables: {
        input: {
          cart: localStorage.getItem("cart"),
          version: localStorage.getItem("version"),
        },
      },
    });
    console.log(data);
    toast.success(
      `Order Placed Successfully with id ${data.orderPlaced.orderNumber}`
    );
    localStorage.removeItem("cart");
    localStorage.removeItem("version");
    nav("/");
  };

  return { plcaeOrder };
};

export default usePaymentMethod;
