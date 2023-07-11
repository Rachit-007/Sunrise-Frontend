import { gql } from "@apollo/client";

export const LOGIN_USER_WITH_GOOGLE = gql`
  mutation LoginUserWithGoogle($input: String) {
    loginUserWithGoogle(input: $input)
  }
`;
