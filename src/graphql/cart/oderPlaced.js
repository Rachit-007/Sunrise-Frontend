import { gql } from "@apollo/client";

export const ORDER_PLACED = gql`
  mutation OrderPlaced($input: PlaceOrderInput) {
    orderPlaced(input: $input)
  }
`;
