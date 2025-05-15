import { logueado } from "./../services/usuario.js";

/**
 * Funcion para crear la carta de un campo en la seccion 'campos'
 * @param {*} id 
 * @param {*} nombre 
 * @param {*} precio 
 * @param {*} disponible 
 * @returns 
 */
export function cartaCampo(id,nombre,precio,disponible,modalidad) {
    // creamos la carta
    let card = document.createElement("article"); 
    card.classList.add("campo"); 

    //creamos el div que tendra la imagen de fondo
    let divImg = document.createElement("div"); 
    divImg.classList.add("img")

    // asignamos una foto en funcion de la modalidad
    if (modalidad == 1) {
        divImg.style.backgroundImage = "url('./PUBLIC/ASSETS/balon-futbol.jpeg')"; 
    }else if (modalidad == 2) {
        divImg.style.backgroundImage = "url('./PUBLIC/ASSETS/tenis.jpeg')";
    }else{
        divImg.style.backgroundImage = "url('./PUBLIC/ASSETS/padel.jpeg')";
    }

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
    
    logueado().then(info => {
        if (info.rol != 2) {
            enlace.href = `/TFG/reservarCampo?id_campo=${id}`; // pasamos por parametro el id del campo para poder trabajar con sus horarios en su pagina
            enlace.target = "_self";
            enlace.textContent = "Reservar"

        }else{
            enlace.href = '/TFG/perfil'; 
            enlace.target = "_self";
            enlace.textContent = "Editar"
        }
    })

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
