import { gql } from "@apollo/client";

export const UPDATE_CART_QTY = gql`
  mutation Mutation($data: JSON) {
    updateCart(data: $data) {
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
