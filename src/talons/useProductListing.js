import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GET_PRODUCTS } from "../graphql/product/getProduct";

const useProductListing = () => {
  const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS, {
    fetchPolicy: "no-cache",
  });
  const [searchParams] = useSearchParams();

  const searchedProduct = searchParams.get("search");

  /**
   * this useEffect will call when the url is changed
   * if url consist search product it will fetch searched product
   * if url doesnt consist search product it will fetch home page products
   */
  useEffect(() => {
    if (searchedProduct) {
      getProducts({ variables: { searchedProduct } });
    } else {
      getProducts();
    }
  }, [searchedProduct]);

  return {
    data,
    loading,
    error,
  };
};

export default useProductListing;
