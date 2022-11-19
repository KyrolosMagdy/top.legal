import { gql } from "@apollo/client";

export const fetchCharacters = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      results {
        name
        status
        image
        id
        location {
          name
          id
        }
        origin {
          name
          id
        }
      }
    }
  }
`;
