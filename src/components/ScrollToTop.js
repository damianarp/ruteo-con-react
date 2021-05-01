// Importamos useEffect desde React.
import { useEffect } from "react";

// Importamos useLocation desde React Router.
import { useLocation } from "react-router-dom";

// Exportamos la función que va a manejar el Scroll entre rutas.
// Usamos useEffect para que, en caso de que haya un cambio de rutas, se haga un scroll al (0, 0).
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
