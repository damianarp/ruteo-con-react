// Exportamos el componente PokemonListItem y le pasamos como propiedad el name y la url.
// Utilizamos el tag diamante <> que es equivalente a usar <React.Fragment> y sirve para colocar más de un descendiente en un mismo componente que a su vez no tiene un contenedor tal cual.
export default function PokemonListItem({name, url}) {
    return (
        <>
            <p>{name}</p>
            <button>Ver detalle</button>
        </>
    );
}