import { gql } from "@apollo/client";

export const ADD_SHIPPING_ADDRESS = gql`
  mutation AddShippingAddress($input: ShippingAddressInput) {
    addShippingAddress(input: $input) {
      version
      shippingAddress {
        firstName
        lastName
        building
        city
        postalCode
        country
        mobile
      }
      shippingInfo {
        shippingMethodName
        price {
          centAmount
          fractionDigits
        }
        shippingMethod {
          id
        }
      }
      totalPrice {
        centAmount
        fractionDigits
      }
      customerEmail
      lineItems {
        id
        productId
        name {
          en
        }
        slug {
          en
        }
        variant {
          images {
            url
          }
        }
        quantity
        price {
          value {
            fractionDigits
            centAmount
          }
        }
        totalPrice {
          fractionDigits
          centAmount
        }
      }
    }
  }
`;
