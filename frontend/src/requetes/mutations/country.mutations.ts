import { gql } from '@apollo/client';


export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $emoji: String!, $code: String!, $continentId: ID!) {
    addCountry(name: $name, emoji: $emoji, code: $code, continentId: $continentId) {
      id
      name
      emoji
      code
    }
  }
`;
