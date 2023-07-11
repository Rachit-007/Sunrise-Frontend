import { gql } from "@apollo/client";

export const CHECK_FOR_GOOGLE = gql`
  mutation CheckUserGoogle($input: String) {
    addUserGoogle(input: $input)
  }
`;
