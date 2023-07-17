import { gql } from "@apollo/client";

export const GET_SHIPPING_METHODS = gql`
  query GetShippingMethods($data: JSON) {
    getShippingMethods(data: $data) {
      id
      localizedDescription {
        en
      }
      name
      zoneRates {
        shippingRates {
          price {
            centAmount
            fractionDigits
          }
        }
      }
    }
  }
`;
