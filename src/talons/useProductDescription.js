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

  const attributes = productData?.singleProduct.masterVariant.attributes;
  const size = productData && find(attributes, { name: "size" });
  const color = productData && find(attributes, { name: "color" });
  const gender = productData && find(attributes, { name: "gender" });
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
