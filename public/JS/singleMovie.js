import { APIKEY } from "../JS/components/apiKEY"
import { getMovieInfo } from "../JS/components/movieCards";

let imgURL; 
let seccion_arriba = document.getElementById("arriba")
let seccion_abajo_img = document.querySelector("#abajo > article > .img")
let titulo_pelicula = document.querySelector('.text > h1')
let descripcion_pelicula = document.querySelector('.text > p')


getMovieInfo(822119).then(info => {
    imgURL = info.img
    seccion_arriba.style.backgroundImage = `url(${imgURL})`
    seccion_abajo_img.style.backgroundImage = `url(${imgURL})`
    titulo_pelicula.textContent = info.titulo
    descripcion_pelicula.textContent = info.descripcion
})




