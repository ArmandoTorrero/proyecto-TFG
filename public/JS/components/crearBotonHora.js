import { crearBoton } from "./boton.js";

/**
 * Crear el boton del horario del campo
 * @param {*} id_hora 
 * @param {*} hora_inicio 
 * @returns 
 */

export function crearBtnHora(id_hora,hora_inicio,disponible) {

    const boton = crearBoton("", 'hora')
    
    const enlace = document.createElement("a"); 
    enlace.href = `/TFG/pasarelaPago?id_horario=${id_hora}`; 
    enlace.target = "_self"; 
    hora_inicio = `${hora_inicio.slice(0, 5)}`; // le quito los segundos
    enlace.textContent = hora_inicio; 

    // desactivo el enlace en caso de que la hora no este disponible 
    if (disponible != 1) {
        boton.style.backgroundColor = "rgba(255,255,255, 0.4)"; 
        enlace.addEventListener("click", (ev) =>{
            ev.preventDefault(); 
        })
    }

    boton.appendChild(enlace); 
    
    return boton; 
}