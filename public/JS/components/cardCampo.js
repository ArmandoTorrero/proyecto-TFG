import { CrearEtiquetaConClase } from "./crearEtiqueta-Clase";

/**
 * Funcion para crear la carta de un campo en la seccion 'campos'
 * @param {*} id 
 * @param {*} nombre 
 * @param {*} precio 
 * @param {*} disponible 
 * @returns 
 */
export function cartaCampo(id,nombre,precio,disponible) {
    // creamos la carta
    let card = document.createElement("article"); 
    card.classList.add("campo"); 

    //creamos el div que tendra la imagen de fondo
    let divImg = document.createElement("div"); 
    divImg.classList.add("img")

    // creamos la seccion de content
    let content = document.createElement("section")
    content.classList.add("content")

    // creamos el titulo de la pista
    let content_titulo = document.createElement("h2")
    content_titulo.textContent = nombre; 

    // creamos el span que contendra el precio
    let content_span = document.createElement("span");
    content_span.textContent = `${precio}€`;  

    // añadimos el precio y el titulo a la seccion content
    content.append(content_titulo,content_span); 

    // creamos el boton y el enalce
    let button = document.createElement("button"); 
    let enlace = document.createElement("a"); 
    enlace.href = `/TFG/reservarCampo?id_campo=${id}&nombre_campo=${nombre}`; // pasamos por parametro el id del campo para poder trabajar con sus horarios en su pagina
    enlace.target = "_self";
    enlace.textContent = "Reservar"

    if (disponible != 1) {
        button.style.backgroundColor = "rgb(36, 98, 235, 0.5)"; 
        enlace.addEventListener("click", (ev) => {
            ev.preventDefault()
        })
        
    }
    button.appendChild(enlace);  

    card.append(divImg,content,button); 

    return card; 
}

export function cardCampoReserva(nombre_campo,precio_hora,modalidad_id,fecha,hora_inicio) {
    //creamos la carta y le asignamos su clase
    let card = CrearEtiquetaConClase("article","card-reserva"); 

    //creamos el div que tendra la imagen de fondo y le asignamos la clase
    let divImg = CrearEtiquetaConClase("div","img-reserva");
    divImg.style.height = "300px"; 
    
    if (modalidad_id == 1) {
        divImg.style.backgroundImage = "url(../ASSETS/balon-futbol.jpeg)"; 
    }
    
    // creamos la seccion de content y le asignamos una clase
    let content = CrearEtiquetaConClase("section","content-reserva");
    
    // creamos los elementos de la clase content
    let h1 = CrearEtiquetaConClase("h1","titulo").textContent = nombre_campo; 
    let precio = CrearEtiquetaConClase("p","precio-reserva").textContent = precio_hora; 
    let fechaReserva = CrearEtiquetaConClase("p","fecha-reserva").textContent = fecha; 
    let hora_inicio_reserva = CrearEtiquetaConClase("p","hora_inicio").textContent = hora_inicio;
    
    content.append(h1,precio,fechaReserva,hora_inicio_reserva); 

    card.append(divImg,content); 
    
    return card; 

}