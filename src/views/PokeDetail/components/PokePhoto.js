// Exportamos el componente que va a mostrar la foto del pokemon.
export default function PokePhoto({name, pokemonDetail}) {
    
    return (
        
        <img 
            alt={`Imagen de ${name}`} 
            src={pokemonDetail?.sprites.other["official-artwork"].front_default ?? []}
            width={200}
        />
        
    );
    
}