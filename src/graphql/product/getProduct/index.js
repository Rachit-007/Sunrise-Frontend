import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products($searchedProduct: String) {
    products(searchedProduct: $searchedProduct) {
      id
      masterVariant {
        images {
          url
        }
        prices {
          value {
            centAmount
            fractionDigits
            currencyCode
          }
        }
      }
      name {
        en
      }
      slug {
        en
      }
    }
  }
`;
