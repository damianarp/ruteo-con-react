// Importamos el hook useContext para poder usar el contexto creado.
import { useContext, useEffect } from "react";

import PokemonContext from "../../context/pokemons"; 

// Exportamos la función para la ruta del Home
// Creamos el contexto myContext y le asignamos como nombre de contexto el contexto creado anteriormente "PokemonContext".
// Luego hacemos destructuring de myContext (se transforma en {showAlert}) para acceder a la función global showAlert.
// A través del useEffect llamamos a la función global showAlert, unicamente durante la primera carga, para eso le colocamos corchetes vacíos.
export default function Home() {
    const {showAlert} = useContext(PokemonContext);
    useEffect(() => {
        showAlert();
    }, []);
    return (
        <div>Home</div>
    );
}
