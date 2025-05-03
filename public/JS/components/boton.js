import { crearFormulario, editar } from "../components/form_elements";
import { userInfoBySendingId } from "../services/usuario";
import { getCampoById } from "./../services/campo";


/**
 * Crear boton
 * @param {*} clase 
 * @returns 
 */
export function crearBoton(clase = 'btn') {
    let boton = document.createElement("button")
    boton.classList.add('btn', clase)

    return boton; 
}

/**
 * Boton de editar 
 * @param {*} clase 
 * @returns 
 */
export function btnEditar(clase = 'btn-success') {
    let boton = crearBoton(clase); 
    boton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'; 
    return boton; 
}

/**
 * Boton de eliminar
 * @param {*} clase 
 * @returns 
 */
export function btnEliminar(clase = 'btn-danger') {
    let boton = crearBoton(clase); 
    boton.innerHTML = '<i class="fa-solid fa-trash"></i>';  
    return boton;
}

/**
 * Devolver los botones en un unico container
 * @returns 
 */
export function accionesContainer() {
    const accionesContainer = document.createElement("article"); 
    accionesContainer.classList.add("acciones-container");
    accionesContainer.append(btnEditar(), btnEliminar()); // añadimos los botones al contenedor
    return accionesContainer; // devolvemos el contenedor con los botones
}




/**
 * Al pulsar en el boton de editar se crea una ventana con un formulario con la información del usuario pulsado y poder editarlo. 
 * @param {*} id 
 */
export function containerFormUser(id) {
    let containerFormUser = document.querySelector(".containerFormUser");
    containerFormUser.classList.toggle("visible"); 

    // Eliminar formulario existente si ya hay uno
    const existingForm = containerFormUser.querySelector("form");
    if (existingForm) {
        existingForm.remove();
    }

    // A partir del id del usuario recibimos su informacion y creamos el formulario. 
    userInfoBySendingId(id).then(info => {
        let info_usuario = info.info; 

        let labels = ['Nombre', 'Email','Telefono']; 
        let names = ['nombre', 'email', 'tlf']; 
        let types = ['text', 'email', 'number']; 
        let values = []; 

        names.forEach(name => {
            values.push(info_usuario[name]); 
        });

        const form = crearFormulario(labels, names, types, values,'/TFG/editarUsuarioVersionAdmin');
        form.setAttribute('data-usuario-id', id); // Añadimos el ID del usuario al formulario
        editar(form); // llamamos a la funcion de editar para editar el usuario y le añadimos el form que acabamos de crear
        
        

        // Añadir botón de cierre dentro del formulario
        const closeButton = document.createElement("button");
        closeButton.textContent = "Cerrar";
        closeButton.type = "button"; // Evitar que actúe como submit
        closeButton.classList.add("close-button");
        closeButton.addEventListener("click", () => {
            containerFormUser.classList.remove("visible");
        });
        form.appendChild(closeButton);

        containerFormUser.appendChild(form);
    });
}

export function containerFormCampo(id) {

    let containerFormCampo = document.querySelector(".containerFormCampo"); 
    containerFormCampo.classList.toggle("visible"); 

    const existingForm = containerFormCampo.querySelector("form");
    if (existingForm) {
        existingForm.remove();
    }

    
    getCampoById(id).then(campo => {

        let info_campo = campo.campo; 
        
        let labels = ['Nombre pista', 'Precio/Hora', 'Modalidad','Disponibilidad']; 
        let names = ['nombre', 'precio_hora', 'modalidad_id','disponible']; 
        let types =['text', 'number', 'number', 'number']; 
        let values = []; 

        names.forEach(name => {
            values.push(info_campo[name])            
        })
            
        const form = crearFormulario(labels, names, types, values, '/TFG/editCampo'); 
        form.setAttribute('data-campo-id', id);
        editar(form)

        // Añadir botón de cierre dentro del formulario
        const closeButton = document.createElement("button");
        closeButton.textContent = "Cerrar";
        closeButton.type = "button"; // Evitar que actúe como submit
        closeButton.classList.add("close-button");
        closeButton.addEventListener("click", () => {
            containerFormCampo.classList.remove("visible");
        });
        form.appendChild(closeButton);

        containerFormCampo.appendChild(form)
        
    })

}



