import { alerta } from "../components/alerta";



/**
 * Función para crear un input  
 * @param {*} name 
 * @param {*} type 
 * @returns 
 */
export function crearInput(name, type) {
    let input = document.createElement("input");
    input.type = type;
    input.name = name; 

    return input;
}

/**
 * Función para crear label
 * @param {*} texoLabel 
 * @returns 
 */
export function crearLabel(texoLabel) {
    let label = document.createElement("label"); 
    label.textContent = texoLabel;

    return label;
}

/**
 * Función para editar el usuario, recoge los datos del formulario y los envía al servidor
 * @param {*} form 
 */
export function editarUsuarioForm(form) {
    // recogemos las alertas
    let alerta_verde = document.getElementById("alerta-verde");
    let alerta_roja = document.getElementById("alerta-roja"); 

    // evento para el submit del formulario
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault(); 

        const formData = new FormData(form); // recogemos los datos del formulario

        try {
            const response = await fetch(form.getAttribute('action'), { // enviamos los datos al servidor
                method: 'POST',
                body: formData
            })
            
            const result = await response.json(); // convertimos la respuesta a json
            
            if (result.exito) {
                alerta(result.mensaje, alerta_verde); // mostramos la alerta de exito
                
            }else {
                alerta(result.mensaje, alerta_roja); // mostramos la alerta de error
            }
            
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            
        }        
    })    
}