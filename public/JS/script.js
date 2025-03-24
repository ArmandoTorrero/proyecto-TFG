import { APIKEY } from "../JS/components/apiKEY"
import { createMovieCard, getMovieInfo } from "../JS/components/movieCards";
import { createFoodCard } from "../JS/components/foodCard";


// API flujo: 
// 1º hacer fetch a las peliculas de 'now playing' y sacar el nombre de la pelicula
// 2º hacer fetch a la url en especifico de esa pelicula para sacar la duracion
// 3º hacer fetch a otra url en especifico de la pelicula para sacar la imagen

// funcion para la cartelera
async function getMovies() {
    try {
        
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=es-ES&region=ES`;
        let response = await fetch(url);
        let data = await response.json();
        let peliculas = data.results

        let carteleraContainer = document.getElementById("cartelera")

        peliculas.forEach(pelicula => {
            getMovieInfo(pelicula.id).then(info => carteleraContainer.appendChild(createMovieCard(info.titulo, info.duracion, info.poster))); 
             
        });
        
    } catch (error) {
        console.error(error);
    }
} 



function foodSection() {
    let menusContainer = document.querySelector(".menus-container")

    let precios = ['2$','3$','5$']

    precios.forEach(precio => {
        menusContainer.append(createFoodCard('Palomitas',precio))
    });
}



document.addEventListener("DOMContentLoaded", () => {
    getMovies()
    foodSection()
})

async function prueba() {
    try {
        let response = await fetch('/TFG/prueba')
        let data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.error(error);
        
    }
}

prueba()