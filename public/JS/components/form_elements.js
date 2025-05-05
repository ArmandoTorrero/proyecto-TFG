import { alerta } from "./alerta";
import { crearBoton } from "./boton";
import { crearOption } from "./crearOption";
import { getCampos } from "./../services/campo";

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
export function editar(form) {
    // recogemos las alertas
    let alerta_verde = document.getElementById("alerta-verde");
    let alerta_roja = document.getElementById("alerta-roja"); 

    // evento para el submit del formulario
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault(); 

        const formData = new FormData(form); // recogemos los datos del formulario
        const usuarioId = form.getAttribute("data-usuario-id");
        const campo_id = form.getAttribute("data-campo-id");
        const horarioId = form.getAttribute("data-horario-id");
        const nombre_campo = form.getAttribute("data-nombre-campo");

        if (usuarioId) {
            formData.append("usuario_id", usuarioId);
        }

        if (campo_id) {
            formData.append("campo_id", campo_id);
        }

        if (horarioId) {
            formData.append("horarioId", horarioId);
        }

        if (nombre_campo) {
            formData.append("nombre_campo", nombre_campo);
        }

        try {
            const response = await fetch(form.getAttribute("action"), { // enviamos los datos al servidor
                method: 'POST',
                body: formData
            })
            
            const result = await response.json(); // convertimos la respuesta a json
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
export function crearFormulario(labels, names, types, values, placeholders, action) {

    // Crear un nuevo formulario
    const form = document.createElement("form");
    form.setAttribute('action', action);

    labels.forEach((labelText, index) => {
        const name = names[index];
        const type = types[index];
        const value = values[index];
        const placeholder = placeholders[index];

        const label = crearLabel(labelText);
        let input;

        // Hacemos estas comprobaciones para saber si estamos editando un usuario o una pista deportiva 

        if (name === "disponible") { // si tenemos que editar la disponibilidad lo hacemos mediante un select 
            input = document.createElement("select");
            input.name = name;
            input.appendChild(crearOption("Disponible", 1));
            input.appendChild(crearOption("No disponible", 0));
        } else if (name === "modalidad_id") { // si tenemos que editar la modalidad lo hacemos mediante un select 
            input = document.createElement("select");
            input.name = name;
            input.appendChild(crearOption("Fútbol", 1));
            input.appendChild(crearOption("Tenis", 2));
            input.appendChild(crearOption("Pádel", 3));
        } else if (name === "hora_inicio") { // si tenemos que editar la hora de inicio lo hacemos con un select
            input = document.createElement("select");
            input.name = name;
            const horarios = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
            horarios.forEach(horario => {
                input.appendChild(crearOption(horario, `${horario}:00`));
            });
        } else if (name === "pista_id") { // si tenemos que crear un horario y asiganrlo a un campo mostramos a que  campo asignarlo dinamicamente
            input = document.createElement("select");
            input.name = name; 
            getCampos().then(campos => {
                campos.forEach(campo => {
                    input.appendChild(crearOption(campo.nombre, campo.id))
                });
            })
        } else {
            input = crearInput(name, type, value);
            if (placeholder) {
                input.placeholder = placeholder;
            }
        }

        let input_label_container = document.createElement("article"); 
        input_label_container.classList.add("input-label-container");
        input_label_container.append(label, input);

        form.appendChild(input_label_container);
    });

    form.appendChild(crearBotonSubmit());

    return form;
}



