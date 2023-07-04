import { Link } from "react-router-dom";
import { CartBtn } from "../cartBtn";
import { getPrice } from "../priceCalculator";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="relative">
      <Link to={`/product/${product.id}`}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow group dark:bg-gray-800 dark:border-gray-700 w-64 max-sm:w-80  ">
          <img
            className="p-8 rounded-t-lg group-hover:scale-95 duration-300 "
            src={product.masterVariant.images[0].url}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <h5 className="text-base font-bold h-10 tracking-tight text-gray-900 dark:text-white">
              {product.name.en}
            </h5>
            <div className="flex items-center justify-between cursor-pointer mt-5">
              <div>
                <span className="font-extrabold text-gray-900">€ </span>
                <span className="font-medium  text-gray-700 dark:text-white">
                  {getPrice({
                    centAmount:
                      product.masterVariant.prices[0].value.centAmount,
                    fractionDigits:
                      product.masterVariant.prices[0].value.fractionDigits,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute right-3 bottom-3">
        <CartBtn height={2} width={3} />
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    product: PropTypes.arrayOf().isRequired,
  }).isRequired,
};
