import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      name
      emoji
      code
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      id
      name
      emoji
      code
      continent {
        name
      }
    }
  }
`;
