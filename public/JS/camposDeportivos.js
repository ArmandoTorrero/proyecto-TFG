
async function getCampos() {
    
    try {
        let response = await fetch("/TFG/getCampos")
        let data = await response.json(); 
        
        return data.campos; 

    } catch (error) {
        console.error(error);
        
    }
    
}

function cartaCampo(nombre,precio,disponible) {
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
    enlace.href = "https://www.youtube.com/"; 
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

getCampos().then(array_campos => {
    array_campos.forEach(campo => {
        const camposContainer = document.querySelector(".campos-container"); 
        camposContainer.appendChild(cartaCampo(campo.nombre, campo.precio_hora, campo.disponible))
    });
    
})