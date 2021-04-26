// Importamos el contexto
import PokemonContext from "./index";

// Importamos la funcion genérica que sirve para hacer las llamadas a la API
import apiCall from "../../api";

// Importamos useState desde React para poder utilizarlo.
import { useState } from "react";

// Exportamos la funcion del Provider para que pueda ser utilizada por el resto de la app.
// Agregamos una constante de estado y su respectivo setter.
// Creamos una función asíncrona getPokemons. Le agregamos un try-catch en caso de que algo malo suceda.
// Llamamos a la funcion apiCall (que espera una respuesta, por eso el await) y le pasamos los argumentos, en este caso con la url sola alcanza, ya que el método ya es get por default cuando creamos la función genérica.
// Se llama a la API, se guarda en una constante de estado de este mismo componente, y si sale algo mal, devuelve un arreglo vacío.

// Retornamos el contexto y le asignamos el atributo de provider.
// Luego a ese provider le pasamos la propiedad "children".
// Al provider le asignamos como valor la función asíncrona getPokemons y le pasamos otro valor "pokemons" para compartirlo con todos los componentes descendientes.
export default function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const getPokemons = async () => {
        try {
            const pokemonResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100"
            });
            setPokemons(pokemonResult.results)  ;
        } catch (error) {
            setPokemons([]);
        }
    };

    return (
         <PokemonContext.Provider value={{getPokemons, pokemons}}>
             {children}
         </PokemonContext.Provider>
    );
}