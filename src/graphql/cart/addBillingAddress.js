import { gql } from "@apollo/client";

export const ADD_BILLING_ADDRESS = gql`
  mutation AddBillingAddress($input: ShippingAddressInput) {
    addBillingAddress(input: $input) {
      version
      shippingAddress {
        firstName
        lastName
        building
        city
        postalCode
        country
        mobile
      }
      billingAddress {
        firstName
        lastName
        building
        city
        postalCode
        country
        mobile
      }
      shippingInfo {
        shippingMethodName
        price {
          centAmount
          fractionDigits
        }
        shippingMethod {
          id
        }
      }
      totalPrice {
        centAmount
        fractionDigits
      }
      customerEmail
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
          images {
            url
          }
        }
        quantity
        price {
          value {
            fractionDigits
            centAmount
          }
        }
        totalPrice {
          fractionDigits
          centAmount
        }
      }
    }
  }
`;
