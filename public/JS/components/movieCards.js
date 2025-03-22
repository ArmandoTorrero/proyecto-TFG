import { APIKEY } from "../components/apiKEY";


/**
 *Funcion para coseguir la informacion de una pelicula
 *
 * @param {*} id
 */
export async function getMovieInfo(id){
    
    try {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-ES`)

        let details = await detailsResponse.json()

        const posterURL = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
        const title = details.original_title; 
        const duracion = details.runtime; 
        const resumen = details.overview; 

        const info = {img: posterURL, titulo: title, duracion: duracion, descripcion: resumen}

        return info;                 


    } catch (error) {
        console.error(error);
        
    }
}



/**
 *Funcion para crear la carta de una pelicula
 *
 * @export
 * @param {*} titulo
 * @param {*} duracion
 * @param {*} img
 * @return {*} 
 */
export function createMovieCard(titulo,duracion,img) {
    let movieContainer = document.createElement('article'); // creamos el contenedor de la pelicula

    movieContainer.classList.add('movie-card'); // le añadimos la clase movie-card

    // cremoas la imagen junto con sus atributos
    let movieCover = document.createElement('img');
    movieCover.src = img;
    movieCover.alt = titulo;

    // creamos el contenedor para el contenido de la pelicula
    let movieContent = document.createElement('section');
    movieContent.classList.add('movie-content');

    // creamos el titulo de la pelicula
    let movieTitle = document.createElement('h2');
    movieTitle.textContent = titulo;

    // creamos el enlace para reservar la pelicula
    let reservarEnlace = document.createElement('a');
    reservarEnlace.href = '#';
    reservarEnlace.textContent = 'Reservar entrada';

    // creamos el parrafo para la duracion de la pelicula
    let movieDuration = document.createElement('p');
    movieDuration.textContent = `${duracion} min`;

    // añadimos los elementos al contenedor de la pelicula
    movieContent.append(movieTitle,reservarEnlace,movieDuration);
    movieContainer.append(movieCover,movieContent);

    return movieContainer; // retornamos el conteneodr de la pelicula

}

