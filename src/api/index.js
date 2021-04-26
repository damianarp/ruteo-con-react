// Exportamos una función asíncrona genérica (es decir que pueda utilizar GET, POST, PUT, PATCH, DELETE) que se encargue de realizar la llamada a la API por nosotros. Para esto le pasamos como argumento un objeto, el cual va a tener la url del end point a llamar; el método que usaremos, en este caso le pasamos "get" por default; un body, en caso de que la llamada viaje con alguna data; y headers (por ejemplo por si necesita algún tipo de autentificación) aunque es opcional.
// Luego utilizamos el método fetch para realizar la llamada a la API, y retornamos un resultado. Lo ubicamos dentro de un try-catch para poder atrapar los errores.
export default async function apiCall({
    url,
    method = "get",
    body, 
    headers,
}) {
    try {
        const response = await fetch(url, {
            method,
            body,
            headers, 
        });
        return response.json();
    } catch (error) {
        Promise.reject(error);
    }
    
}