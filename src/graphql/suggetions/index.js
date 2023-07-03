import { gql } from "@apollo/client";

export const GET_SUGGETION = gql`
  query Suggest($searchKeywords: String!) {
    suggest(searchKeywords: $searchKeywords) {
      text
    }
  }
`;
