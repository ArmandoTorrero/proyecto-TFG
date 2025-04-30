import { alerta } from "../components/alerta";
import { crearBoton } from "../components/boton";


/**
 * Crear boton para enviar formulario
 * @returns 
 */
function crearBotonSubmit() {
    let boton = crearBoton(); 
    boton.textContent = "Guardar cambios"; 
    boton.type = "submit"; 
    
    return boton
}

/**
 * Función para crear un input  
 * @param {*} name 
 * @param {*} type 
 * @returns 
 */
export function crearInput(name, type, input_value = "") {
    let input = document.createElement("input");
    input.type = type;
    input.name = name; 
    input.value = input_value; 

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
        formData.append('id_usuario', form.getAttribute('data-id-usuario'));

        try {
            const response = await fetch(form.getAttribute('action'), { // enviamos los datos al servidor
                method: 'POST',
                body: formData
            })
            
            const result = await response.text(); // convertimos la respuesta a json
            console.log(result);
            
            
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

/**
 * Función para crear un formulario dinámico
 * @param {*} labels 
 * @param {*} names 
 * @param {*} types 
 * @param {*} action 
 * @returns 
 */
export function crearFormulario(labels, names, types, values, action) {

    // Crear un nuevo formulario
    const form = document.createElement("form");
    form.setAttribute('action', action);

    labels.forEach((labelText, index) => {
        const label = crearLabel(labelText);
        const input = crearInput(names[index], types[index], values[index]);

        let input_label_container = document.createElement("article"); 
        input_label_container.classList.add("input-label-container");
        input_label_container.append(label, input);

        form.appendChild(input_label_container);
    });

    form.appendChild(crearBotonSubmit());

    editarUsuarioForm(form); // Asocia la funcionalidad de edición al formulario

    return form;
}

