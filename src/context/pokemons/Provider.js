// Importamos el contexto
import PokemonContext from "./index";

// Exportamos la funcion del Provider para que pueda ser utilizada por el resto de la app.
// Retornamos el contexto y le asignamos el atributo de provider.
// Luego a ese provider le pasamos la propiedad "children".
// Al provider le asignamos un valor.
export default function PokemonProvider({children}) {
    return (
         <PokemonContext.Provider value={{showAlert: () => alert(10)}}>
             {children}
         </PokemonContext.Provider>
    );
}