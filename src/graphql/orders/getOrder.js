import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      id
      version
      createdAt
      orderNumber
      customerId
      customerEmail
      orderState
      shippingAddress {
        firstName
        lastName
        mobile
        building
        state
        city
        country
        postalCode
      }
      billingAddress {
        firstName
        lastName
        mobile
        building
        state
        country
        postalCode
        city
      }
      lineItems {
        id
        productId
        name {
          en
        }
        slug {
          en
        }
        variant {
          prices {
            value {
              centAmount
              fractionDigits
            }
          }
          images {
            url
          }
          attributes {
            name
          }
        }
        quantity
        price {
          value {
            centAmount
            fractionDigits
          }
        }
        totalPrice {
          centAmount
          fractionDigits
        }
      }
    }
  }
`;
