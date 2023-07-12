import { gql } from "@apollo/client";

export const LOGIN_GOOGLE = gql`
  mutation Mutation($input: String) {
    addUserGoogle(input: $input)
  }
`;
