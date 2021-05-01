// Importamos Link de react-router-dom para poder implementarlo.
import { Link } from "react-router-dom";

// Exportamos el componente PokemonListItem y le pasamos como propiedad el name y la url.
// Utilizamos el tag diamante <> que es equivalente a usar <React.Fragment> y sirve para colocar más de un descendiente en un mismo componente que a su vez no tiene un contenedor tal cual.
// Declaramos una constante getId con la función para que nos obtenga el id de la url, para ello segmentamos la url por medio del / usando el método split, y así obtendremos un arreglo de donde podremos tomar la posición del id, en este caso es la posición 6.
// Utilizamos Link en el botón para que nos redirija a la ruta configurada. Como no tenemos el id, utilizamos la función getId para obtenerlo.
export default function PokemonListItem({name, url}) {
    const getId = () => url.split("/")[6];
    return (
        <>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}>Ver detalle</Link>
            </button>
        </>
    );
}