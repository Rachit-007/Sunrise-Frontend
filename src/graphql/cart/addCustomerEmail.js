import { gql } from "@apollo/client";

export const ADD_EMAIL = gql`
  mutation Mutation($data: JSON) {
    addEmailToCart(data: $data) {
      version
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
