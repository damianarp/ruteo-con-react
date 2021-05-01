// Importamos el hook useParams para que regrese un objeto con el valor de todos los parámetros de la url que fueron agregados a la ruta.
import { useParams } from "react-router-dom";

// Exportamos una función que retorne el detalle de los pokemones.
// Hacemos destructuring de id utilizando el hook useParams.
export default function PokeDetail() {
    const {id} = useParams();
    console.log(id);
    return (
        <div>PokeDetail</div>
    );
}