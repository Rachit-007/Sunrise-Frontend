import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_SINGLE_PRODUCT } from "../graphql/product/getSingleProduct";
import find from "lodash/find";

const useProductDescription = () => {
  const { id } = useParams();
  const {
    data: productData,
    loading,
    error,
  } = useQuery(GET_SINGLE_PRODUCT, { variables: { singleProductId: id } });

  /**
   * this variable will extract the attributes from the data of the product
   */
  const attributes = productData?.singleProduct.masterVariant.attributes;

  /**
   * it will extract the size from the attributes
   */
  const size = productData && find(attributes, { name: "size" });

  /**
   * it will extract the color from the attributes
   */
  const color = productData && find(attributes, { name: "color" });

  /**
   * it will extract the gender from the attributes
   */
  const gender = productData && find(attributes, { name: "gender" });

  /**
   * it will extract the designer from the attributes
   */
  const brand = productData && find(attributes, { name: "designer" });

  return {
    productData,
    loading,
    error,
    size,
    color,
    brand,
    gender,
  };
};

export default useProductDescription;
