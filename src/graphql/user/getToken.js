import { gql } from "@apollo/client";

export const GET_ACCESS_TOKEN = gql`
  mutation LoginUser($input: String) {
    loginUser(input: $input)
  }
`;
