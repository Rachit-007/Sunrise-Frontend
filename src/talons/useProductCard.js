import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { ADD_CART } from "../graphql/cart/createCart";

const useProductCard = () => {
  const [addCart] = useMutation(ADD_CART);

  /**
   * Function is used to add product item to the cart
   * @date 14/7/2023 - 12:09:47 pm
   * @param {string} id
   */
  const addToCart = async (id) => {
    const cart = localStorage.getItem("cart");
    const version = localStorage.getItem("version");
    try {
      const { data } = await addCart({
        variables: {
          data: {
            cart,
            version,
            id: id,
          },
        },
      });
      //   console.log(data);
      if (data.addCart.id) {
        localStorage.setItem("cart", data.addCart.id);
        localStorage.setItem("version", data.addCart.version);
        toast.success("Item Added Successfully");
      } else {
        localStorage.setItem("version", data.addCart.version);
        toast.success("Item Added Successfully");
      }
    } catch (err) {
      toast.error("Unable to add to cart");
      console.log(err);
    }
  };
  return { addToCart };
};

export default useProductCard;
