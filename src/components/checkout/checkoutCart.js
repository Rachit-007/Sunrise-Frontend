import { memo } from "react";
import { getPrice } from "../priceCalculator";

const ChekcoutCart = ({ item }) => {
  return (
    <>
      <li class="flex items-stretch justify-between space-x-5 py-7">
        <div class="flex items-stretch flex-1">
          <div class="flex-shrink-0">
            <img
              class="w-20 h-20 border border-gray-200 rounded-lg"
              src={item.variant.images[0].url}
              alt=""
            />
          </div>

          <div class="flex flex-col justify-between ml-5">
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-900">{item.name.en}</p>
            </div>

            <p class="mt-4 text-sm font-medium text-gray-500">
              x {item.quantity}
            </p>
          </div>
        </div>

        <div class="flex flex-col items-end justify-between ml-auto">
          <p class="text-sm font-bold text-right text-gray-900">
            <span className="text-gray-500">$</span>{" "}
            {getPrice({
              centAmount: item.price.value.centAmount,
              fractionDigits: item.price.value.fractionDigits,
            })}
          </p>
        </div>
      </li>
    </>
  );
};

export default memo(ChekcoutCart);
