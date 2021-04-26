// Importamos el hook useContext para poder usar el contexto creado.
import { useContext } from "react";

// Importamos el contexto
import PokemonContext from "../../context/pokemons"; 

//Exportamos la función para la ruta de la página 404
export default function Four0Four() {
    const {pokemons} = useContext(PokemonContext);
    console.log(pokemons);
    return (
        <div>
            <p>
                Perdona, no encontré lo que estas buscando.
            </p>
        </div>
    );
}