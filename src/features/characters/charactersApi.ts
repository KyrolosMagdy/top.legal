import { gql } from "@apollo/client";

export const fetchCharacters = gql`
  query getCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        name
        status
        image
        gender
        id
        species
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
