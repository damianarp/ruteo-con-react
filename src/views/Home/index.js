// Importamos el hook useContext para poder usar el contexto creado.
import { useContext, useEffect } from "react";

// Importamos el contexto
import PokemonContext from "../../context/pokemons"; 

// Importamos el componente PokemonList
import PokemonList from "./components/PokemonList"; 

// Exportamos la función para la ruta del Home
// Creamos el contexto myContext y le asignamos como nombre de contexto el contexto creado anteriormente "PokemonContext".
// Luego hacemos destructuring de myContext (se transforma en {getPokemons}) para acceder a la función.
// A través del useEffect llamamos a la función getPokemons, unicamente durante la primera carga, para eso le colocamos corchetes vacíos (y le agregamos el catch como nulo porque es una función asíncrona).
// Retornamos un div con el componente PokemonList y le pasamos como propiedad pokemons para que nos muestre el valor que viene del contexto.
export default function Home() {
    const {getPokemons, pokemons, isLoading} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
      return (
        <p>Cargando resultados...</p>
      ); 
    };

    return <PokemonList pokemons={pokemons}/>;
}
