// Importamos el hook useContext para poder usar el contexto creado.
import { useContext, useEffect } from "react";

// Importamos el contexto
import PokemonContext from "../../context/pokemons"; 

// Importamos el componente Loading
import Loading from "../../components/Loading";

// Importamos el componente PokemonList
import PokemonList from "./components/PokemonList"; 

// Importamos el componente de ErrorMesagge
import ErrorMessage from "../../components/ErrorMessage"; 

// Exportamos la función para la ruta del Home
// Creamos el contexto myContext y le asignamos como nombre de contexto el contexto creado anteriormente "PokemonContext".
// Luego hacemos destructuring de myContext (se transforma en {getPokemons}) para acceder a la función.
// A través del useEffect llamamos a la función getPokemons, unicamente durante la primera carga, para eso le colocamos corchetes vacíos (y le agregamos el catch como nulo porque es una función asíncrona).
// Retornamos un div en donde si hay error, que muestre un mensaje de error. Si no hay error, que muestre la lista  de pokemones que viene del componente PokemonList al cual le pasamos como propiedad pokemons para que nos muestre el valor que viene del contexto.

export default function Home() {
    const {getPokemons, pokemons, isLoading, hasError, errorMessage} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <Loading title="Cargando resultados..."/>;

    return (
      <>
        {hasError ? <ErrorMessage message={errorMessage}/> : <PokemonList pokemons={pokemons}/>}
      </>
    );
}
