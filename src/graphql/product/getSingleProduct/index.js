import { gql } from "@apollo/client";

export const GET_SINGLE_PRODUCT = gql`
  query SingleProduct($singleProductId: ID!) {
    singleProduct(id: $singleProductId) {
      name {
        en
      }
      metaDescription {
        en
      }
      masterVariant {
        prices {
          value {
            fractionDigits
            centAmount
          }
        }
        images {
          url
        }
        attributes {
          name
          value
        }
      }
    }
  }
`;
