// Importamos la libreria del Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Importamos la ruta Home para poder implementarla.
import Home from '../views/Home';

// Importamos la ruta 404 para poder implementarla.
import Four0Four from '../views/404';

// Importamos la ruta PokeDetail para poder implementarla.
import PokeDetail from '../views/PokeDetail';

// Importamos el hook useScrollToTop para implementarlo
import ScrollToTop from "../components/ScrollToTop";

// Exportamos una función para el ruteo de páginas
export default function Routes() {
    return(
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetail />
                </Route>
                <Route>
                    <Four0Four />
                </Route>
            </Switch>
        </Router>
    );
}