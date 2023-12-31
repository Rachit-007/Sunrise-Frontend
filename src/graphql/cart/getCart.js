import { gql } from "@apollo/client";

export const GET_CART = gql`
  query LineItems($data: JSON) {
    getCart(data: $data) {
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
      billingAddress {
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
