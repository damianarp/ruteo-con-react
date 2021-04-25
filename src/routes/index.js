// Importamos la libreria del Router
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Importamos Home para poder implementarla.
import Home from '../views/Home';

// Exportamos una función para el ruteo de páginas
export default function Routes() {
    return(
        <Router>
            <Route path="/" exact>
                <Home />
            </Route>
        </Router>
    );
}