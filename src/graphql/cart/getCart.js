import { gql } from "@apollo/client";

export const GET_CART = gql`
  query LineItems($data: JSON) {
    getCart(data: $data) {
      totalPrice {
        centAmount
        fractionDigits
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
