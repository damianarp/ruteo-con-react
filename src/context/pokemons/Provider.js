// Importamos el contexto
import PokemonContext from "./index";

// Importamos la funcion genérica que sirve para hacer las llamadas a la API
import apiCall from "../../api";

// Importamos useState desde React para poder utilizarlo.
import { useState } from "react";

// Exportamos la funcion del Provider para que pueda ser utilizada por el resto de la app.
// Agregamos una constante de estado y su respectivo setter para la lista de pokemons, y lo mismo pero para el detalle del pokemon. El primer useState inicia con un arreglo vacío ([]), y el segundo devuelve un objeto vacío ({}).
// Agregamos una constante de estado isLoading y su setter para que cuando se cargue la pagina no se muestre información previa.
// Agregamos una constante de estado errorMessage y su setter para que cuando se produzca algún error.

// Creamos una función asíncrona getPokemons para que traiga la lista de todos los pokemons. Le agregamos un try-catch en caso de que algo malo suceda.
// Llamamos a la funcion apiCall (que espera una respuesta, por eso el await) y le pasamos los argumentos, en este caso con la url sola alcanza, ya que el método ya es get por default cuando creamos la función genérica.
// Se llama a la API, se guarda en una constante de estado de este mismo componente, y si sale algo mal, devuelve un arreglo vacío.

// Creamos una función asíncrona getPokemonDetail a la cual le pasamos como parámetro el id para que traiga el detalle del pokemon correspondiente. Le agregamos un try-catch en caso de que algo malo suceda.
// Corroboramos que exista un id, si no existe se dispara un mensaje de error.
// Llamamos a la funcion apiCall (que espera una respuesta, por eso el await) dentro del try y le pasamos los argumentos, en este caso con la url sola alcanza, ya que el método ya es get por default cuando creamos la función genérica.
// Se llama a la API, se guarda en una constante de estado de este mismo componente, y si sale algo mal, devuelve un objeto vacío.

// Retornamos el contexto y le asignamos el atributo de provider.
// Luego a ese provider le pasamos la propiedad "children".
// Al provider le asignamos como valores la función asíncrona getPokemons y le pasamos otro valor "pokemons" (para retornar todos los pokemons en los componentes descendientes) y la función asíncrona getPokemonDetail y el valor pokemonDetail (para retornar el detalle de todos los pokemons en los componentes descendientes). Además le pasamos el isLoading y el errorMessage.

export default function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getPokemons = async () => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);

            const pokemonResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(pokemonResult.results);
        } catch (error) {
            setPokemons([]);
            setErrorMessage("Algo ha ocurrido, verifica tu conexión");
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject("Id es requerido");
        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);

            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail({});
            setErrorMessage("Algo ha ocurrido, verifica tu conexión");
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PokemonContext.Provider value={{
                getPokemons,
                pokemons, 
                getPokemonDetail,
                pokemonDetail,
                isLoading,
                hasError,
                errorMessage,
        }}>
            {children}
        </PokemonContext.Provider>
    );
}