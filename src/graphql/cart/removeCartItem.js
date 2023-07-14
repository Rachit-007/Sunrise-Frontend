import { gql } from "@apollo/client";

export const REMOVE_CART_ITEM = gql`
  mutation Mutation($data: JSON) {
    removeCartItem(data: $data) {
      version
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
