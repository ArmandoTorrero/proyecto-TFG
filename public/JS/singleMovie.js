import { APIKEY } from "../JS/components/apiKEY"
import { getMovieInfo, getMovieVideos } from "../JS/components/movieCards";

let imgURL; 
let imgHorizontal; 
let seccion_arriba = document.getElementById("arriba")

let seccion_abajo_img = document.querySelector("#abajo > section > .img")
let titulo_pelicula = document.querySelector('.text > h1')
let descripcion_pelicula = document.querySelector('.text > p')


getMovieInfo(822119).then(info => {
    imgURL = info.poster
    imgHorizontal = info.posterHorizontaL


    seccion_arriba.style.backgroundImage = `url(${imgURL})`
    seccion_arriba.children[0].textContent = info.titulo // texto para el h1
    seccion_arriba.children[1].textContent = `${info.duracion} min` // texto para el h3
        
    
    seccion_abajo_img.style.backgroundImage = `url(${imgHorizontal})`
    titulo_pelicula.textContent = info.titulo
    descripcion_pelicula.textContent = info.descripcion
})

getMovieVideos(822119).then(url => {
    
    let iframe = document.getElementsByTagName("iframe")[0]
    iframe.src = url
    
})




