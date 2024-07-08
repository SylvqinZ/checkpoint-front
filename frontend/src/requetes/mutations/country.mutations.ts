import { gql } from '@apollo/client';

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $emoji: String!, $code: String!, $continent: Int) {
  addCountry(data: { name: $name, emoji: $emoji, code: $code, continent: $continent }) {
    id
    name
    emoji
    code
    continent {
      id
      name
    }
  }
}

`;