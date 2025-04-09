import { crearBoton } from "./components/boton";

// funcion asincrona para conseguir el horario de un campo
async function getHoras() {
    const response = await fetch('/TFG/horarios'); 
    const data = await response.json();     
    return data; 
    
}

// funcion asincrona para conseguir el nombre del campo
async function getNombreCampo() {
    const response = await fetch('/TFG/nombreCampo');
    const data = await response.json(); 
    return data
}


function cambiarSelect(btn) {
    let select = document.getElementById("fecha");
    console.log(select);
    select.addEventListener("change", () => {
        console.log("si");
        
    })
}

cambiarSelect()

/**
 * Crear el boton del horario del campo
 * @param {*} id_hora 
 * @param {*} hora_inicio 
 * @returns 
 */
function crearBtnHora(id_hora,hora_inicio,disponible) {

    const boton = crearBoton("hora")
    const enlace = document.createElement("a"); 
    enlace.href = `/TFG/pagarCampo?id_horario=${id_hora}`; 
    enlace.target = "_self"; 
    hora_inicio = `${hora_inicio.split(":")[0]}:${hora_inicio.split(":")[1]}`; 
    enlace.textContent = hora_inicio; 

    if (disponible != 1) {
        boton.style.backgroundColor = 'rgb(255, 0, 0, 0.5)'; 
        enlace.style.color = "#fff"
        enlace.addEventListener("click", (ev) => {
            ev.preventDefault(); 
        })
    }

    boton.appendChild(enlace); 
    
    return boton; 
}

document.addEventListener("DOMContentLoaded", () => {

    // Introducir el titulo del campo en el h1
    getNombreCampo().then(nombreCampo => {
        let titulo = document.querySelector(".content > h1")
        titulo.textContent = nombreCampo.nombre
    })

    // crear un boton horario por cada franja_horaria que recibimos 
    getHoras().then(data => {
        
        const horariosSection = document.getElementsByClassName("horarios")[0]

        data.forEach(horario_info => {
            horariosSection.appendChild(crearBtnHora(horario_info.id, horario_info.hora_inicio, horario_info.disponible))      
        });
        
    })
})