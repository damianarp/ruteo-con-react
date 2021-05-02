// Exportamos el componente que va a mostrar las estadísticas del pokemon.
// Mapeamos las stats.
export default function PokeStats({ stats }) {
    return (
        <>
            {stats.map(({stat, base_stat}, index) => (
                <div key={index} style={{
                    display: "flex"
                }}>
                    <p>{stat.name}</p>
                    <p>{`: ${base_stat}%`}</p>
                </div>
            ))}
        </>
    );
}