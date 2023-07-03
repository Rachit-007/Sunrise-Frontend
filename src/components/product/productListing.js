import useProductListing from "../../talons/useProductListing";
import size from "lodash/size";
import ProductCard from "./productCard";
import Loader from "../loader";

const ProductListing = () => {
  const { data, loading, error } = useProductListing();

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else if (data && size(data.products) > 0) {
    return (
      <>
        <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto mt-32 max-sm:mt-32">
          {data.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </>
    );
  } else if (error) {
    return (
      <>
        <h1>An Error Occured</h1>
      </>
    );
  } else if (data && size(data.products) === 0) {
    return (
      <>
        <h1 className="mt-32 text-center font-bold text-2xl">
          No Products Found
        </h1>
      </>
    );
  }
};

export default ProductListing;
