// Importamos createContext desde React.
import { createContext } from "react";

// Creamos un contexto (sirve para meterle información y métodos que van a ser utilizados a lo largo del proyecto) y le asignamos como nombre de contexto "pokemons".
const PokemonContext = createContext("pokemons");

// Exportamos el componente para que pueda ser utilizado por otros componentes.
export default PokemonContext;

