import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ADD_EMAIL } from "../graphql/cart/addCustomerEmail";

const useCreatAccount = (setStep, setCartItems, email) => {
  const { register, handleSubmit, setValue } = useForm();
  const [userEmail, setUserEmail] = useState(email);
  const [addEmailToCart] = useMutation(ADD_EMAIL);

  /**
   *function is responsible for adding the customer email to the cart
   * @param {Object} data
   */
  const onSubmit = async (newData) => {
    if (newData.email == email) {
      setUserEmail(email);
    } else {
      try {
        let { data } = await addEmailToCart({
          variables: {
            data: {
              cart: localStorage.getItem("cart"),
              version: localStorage.getItem("version"),
              email: newData.email,
            },
          },
        });
        setCartItems(data.addEmailToCart);
        localStorage.setItem("version", data.addEmailToCart.version);
        setStep(2);
        setUserEmail(data.addEmailToCart.customerEmail);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (email) {
      setStep(2);
    }
  }, []);
  return {
    register,
    handleSubmit,
    onSubmit,
    userEmail,
    setUserEmail,
    setValue,
  };
};

export default useCreatAccount;
