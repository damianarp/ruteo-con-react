// Importamos el componente PokemonListItem
import PokemonListItem from "./PokemonListItem"

// Exportamos una función que retorna una lista de pokemones y le pasamos la propiedad pokemons para poder renderizar el listado.
// Si pokemons existe, es decir, es una arreglo, accedemos al método map, el cual trae un value en cada iteración (pokemon) y un index, y que a su vez regresa un componente que regresa la información de cada pokemon, el cual es el componente PokemonListItem que tiene como key al index.
// Además le pasamos pokemon como propiedad en forma de spread {...pokemon} que es equivalente a hacer pokemon.name y pokemon.url
export default function PokemonList({pokemons}) {
    return (
        <>
            {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>
            )}
        </>
    );
}