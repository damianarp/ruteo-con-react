// Importamos el hook useParams para que regrese un objeto con el valor de todos los parámetros de la url que fueron agregados a la ruta.
import { useParams } from "react-router-dom";

// Importamos los hooks useEffect y useContext para implementarlos.
import { useEffect, useContext } from "react";

// Importamos el contexto
import PokemonContext from "../../context/pokemons";

// Importamos el componente Loading
import Loading from "../../components/Loading";

// Importamos el componente PokeStats para implementarlo
import PokeStats from "./components/PokeStats";

// Importamos el componente de ErrorMesagge
import ErrorMessage from "../../components/ErrorMessage"; 

// Importamos el componente PokePhoto para implementarlo
import PokePhoto from "./components/PokePhoto";


// Exportamos una función que retorne el detalle de los pokemones.
// Hacemos destructuring de id utilizando el hook useParams.
// Utilizamos el contexto creado previamente.
// Obtenemos el detalle del pokemon a través de la función getPokemonDetail(id) y hacemos un catch nulo para que no se cachée.

// Retornamos los datos que elijamos del json.
export default function PokeDetail() {
    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);
    
    useEffect(() => {
        /**
        * Cada vez que se cargue la pantalla o cada vez que cambie el id
        * solicitar el detalle del pokemon. Para ello necesitamos usar el hook useEffect.
        */
       getPokemonDetail(id).catch(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <Loading title="Cargando pokemons..."/>;

    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <>
                    <h3 style={{marginTop: 15, marginBottom: 10}}>Info General</h3>

                    <PokePhoto />            
                    <p>{`Nombre: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight}00 g`}</p>
                    <p>{`Altura: ${pokemonDetail?.height}0 cm`}</p>
                    <div>
                        <h3 style={{marginTop: 30, marginBottom: 10}}>Habilidades</h3>
                        <PokeStats stats={pokemonDetail?.stats ?? []} />
                    </div>
                </>
            )}
            

        </div>
    );
}