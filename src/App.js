import './App.css';

//Importamos Routes para poder implementarlo.
import Routes from './routes';

// Importamos el componente Pokemon
import PokemonProvider from "./context/pokemons/Provider";

//La app retorna el provider que engloba el resto de la aplicación.
function App() {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
