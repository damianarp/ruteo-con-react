// Importamos el hook useContext para poder usar el contexto creado.
import { useContext, useEffect } from "react";

// Importamos el contexto
import PokemonContext from "../../context/pokemons"; 

// Exportamos la función para la ruta del Home
// Creamos el contexto myContext y le asignamos como nombre de contexto el contexto creado anteriormente "PokemonContext".
// Luego hacemos destructuring de myContext (se transforma en {getPokemons}) para acceder a la función.
// A través del useEffect llamamos a la función getPokemons, unicamente durante la primera carga, para eso le colocamos corchetes vacíos (y le agregamos el catch como nulo porque es una función asíncrona).
export default function Home() {
    const {getPokemons, pokemons} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    }, []);
    console.log(pokemons);
    return (
        <div>Home</div>
    );
}
