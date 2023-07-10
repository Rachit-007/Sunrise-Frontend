import { gql } from "@apollo/client";

export const SIGNUP_GOOGLE = gql`
  mutation AddUserUsingGoogle($input: String) {
    addUserUsingGoogle(input: $input)
  }
`;
