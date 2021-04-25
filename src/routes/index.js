// Importamos la libreria del Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Importamos Home para poder implementarla.
import Home from '../views/Home';

// Importamos 404 para poder implementarla.
import Four0Four from '../views/404';

// Exportamos una función para el ruteo de páginas
export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route>
                    <Four0Four />
                </Route>
            </Switch>
        </Router>
    );
}