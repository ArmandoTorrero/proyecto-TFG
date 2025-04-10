import { crearBoton } from "./boton";

/**
 * Crear el boton del horario del campo
 * @param {*} id_hora 
 * @param {*} hora_inicio 
 * @returns 
 */

export function crearBtnHora(id_hora,hora_inicio) {

    const boton = crearBoton("hora")
    
    const enlace = document.createElement("a"); 
    enlace.href = `/TFG/pagarCampo?id_horario=${id_hora}`; 
    enlace.target = "_self"; 
    hora_inicio = `${hora_inicio.split(":")[0]}:${hora_inicio.split(":")[1]}`; 
    enlace.textContent = hora_inicio; 

    // desactivo el enlace para que el usuario tenga que seleccionar una fecha y asi el boton se active 
    boton.disabled = true; 
    boton.style.backgroundColor = "rgba(255,255,255, 0.4)"; 
    enlace.addEventListener("click", (ev) =>{
        ev.preventDefault(); 
    })

    boton.appendChild(enlace); 
    
    return boton; 
}