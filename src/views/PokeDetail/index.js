// Importamos el hook useParams para que regrese un objeto con el valor de todos los parámetros de la url que fueron agregados a la ruta.
import { useParams } from "react-router-dom";

// Importamos los hooks useEffect y useContext para implementarlos.
import { useEffect, useContext } from "react";

// Importamos el contexto
import PokemonContext from "../../context/pokemons";

// Exportamos una función que retorne el detalle de los pokemones.
// Hacemos destructuring de id utilizando el hook useParams.
// Utilizamos el contexto creado previamente.
// Obtenemos el detalle del pokemon a través de la función getPokemonDetail(id) y hacemos un catch nulo para que no se cachée.
export default function PokeDetail() {
    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail } = useContext(PokemonContext);
    
    useEffect(() => {
        /**
        * Cada vez que se cargue la pantalla o cada vez que cambie el id
        * solicitar el detalle del pokemon. Para ello necesitamos usar el hook useEffect.
        */
       getPokemonDetail(id).catch(null);
    }, []);
    console.log(pokemonDetail);
    return (
        <div>PokeDetail</div>
    );
}