import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "./queries";

function Results({ searchFilter }) {
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { name: searchFilter },
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) return <p>Error :(</p>;

    return (
        <>
            <ul>
                {data.characters.results.map((character) => (
                    <li key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                        <p>{character.species}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Results;
