
/**
 *Funcion para crear la carta de la pelicula
 *
 * @param {*} pelicula
 */
 function createMovieCard(pelicula) {
    let movieContainer = document.createElement('article'); // creamos el contenedor de la pelicula

    movieContainer.classList.add('movie-card'); // le añadimos la clase movie-card

    // cremoas la imagen junto con sus atributos
    let movieCover = document.createElement('img');
    movieCover.src = pelicula.coverImage;
    movieCover.alt = pelicula.name;

    // creamos el contenedor para el contenido de la pelicula
    let movieContent = document.createElement('section');
    movieContent.classList.add('movie-content');

    // creamos el titulo de la pelicula
    let movieTitle = document.createElement('h2');
    movieTitle.textContent = pelicula.name;

    // creamos el enlace para reservar la pelicula
    let reservarEnlace = document.createElement('a');
    reservarEnlace.href = '#';
    reservarEnlace.textContent = 'Reservar entrada';

    // creamos el parrafo para la duracion de la pelicula
    let movieDuration = document.createElement('p');
    movieDuration.textContent = pelicula.duration;

    // añadimos los elementos al contenedor de la pelicula
    movieContent.append(movieTitle,reservarEnlace,movieDuration);
    movieContainer.append(movieCover,movieContent);

    return movieContainer; // retornamos el conteneodr de la pelicula

}


/**
 *Funcion para crear la seccion de las peliculas
 *
 * @export
 * @param {*} arrayPeliculas
 */
export function createMoviesSection(arrayPeliculas) {
    let carteleraContainer = document.getElementById("cartelera");

   arrayPeliculas.forEach(pelicula => {
        let movieCard = createMovieCard(pelicula);
        carteleraContainer.appendChild(movieCard);
   });
}