import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
    query ($name: String) {
        characters(filter: { name: $name }) {
            results {
                name
                gender
                image
            }
        }
    }
`;
