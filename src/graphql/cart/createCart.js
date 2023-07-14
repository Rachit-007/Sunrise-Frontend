import { gql } from "@apollo/client";

export const ADD_CART = gql`
  mutation CreateCart($data: JSON) {
    addCart(data: $data)
  }
`;
