import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($input: addUserInput!) {
    addUser(input: $input)
  }
`;
