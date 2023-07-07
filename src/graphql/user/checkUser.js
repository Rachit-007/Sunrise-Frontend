import { gql } from "@apollo/client";

export const CHECK_USER = gql`
  mutation CheckUser($input: checkUserInput) {
    checkUser(input: $input) {
      createUser
    }
  }
`;
