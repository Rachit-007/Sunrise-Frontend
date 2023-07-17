import { gql } from "@apollo/client";

export const ADD_SHIPPING_METHODS = gql`
  mutation Mutation($input: JSON) {
    addShippingMethods(input: $input) {
      version
      customerEmail
      totalPrice {
        centAmount
        fractionDigits
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
      shippingAddress {
        firstName
        lastName
        building
        city
        postalCode
        country
        mobile
      }
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
