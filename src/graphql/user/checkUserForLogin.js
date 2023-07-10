import { gql } from "@apollo/client";

export const CHECK_USER_FOR_LOGIN = gql`
  mutation CheckUserLogin($data: JSON) {
    checkUserLogin(data: $data) {
      loginUser
    }
  }
`;
