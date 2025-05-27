import { crearFormulario, editar } from "./form_elements.js";
import { userInfoBySendingId } from "./../services/usuario.js";
import { getCampoById } from "./../services/campo.js";
import { getHorarioById } from "./../services/franja_horaria.js";
import { aplicarAnimacion } from "./animaciones.js";


/**
 * Crear boton
 * @param {*} clase 
 * @returns 
 */
export function crearBoton(texto,clase = 'btn') {
    let boton = document.createElement("button"); 
    boton.textContent = texto; 
    boton.classList.add('btn', clase)

    return boton; 
}


export function btnCerrar(contenedor) {
    const closeButton = crearBoton("Cerrar"); 
    closeButton.type = "button"; // Evitar que actúe como submit
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", () => {
        contenedor.classList.remove("visible");
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto"; // cuando se haga click devolvemos el scroll
    });
    return closeButton
}

/**
 * Boton de editar 
 * @param {*} clase 
 * @returns 
 */
export function btnEditar(clase = 'btn-success') {
    let boton = crearBoton("",clase); 
    boton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'; 
    return boton; 
}

/**
 * Boton de eliminar
 * @param {*} clase 
 * @returns 
 */
export function btnEliminar(clase = 'btn-danger') {
    let boton = crearBoton("",clase); 
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
        let placeholders = ['Introduce el nombre', 'Introduce el email', 'Introduce el teléfono'];
        let values = []; 

        names.forEach(name => {
            values.push(info_usuario[name]); 
        });

        const form = crearFormulario(labels, names, types, values, placeholders, '/TFG/editarUsuarioVersionAdmin');
        form.setAttribute('data-usuario-id', id); // Añadimos el ID del usuario al formulario
        editar(form); // llamamos a la funcion de editar para editar el usuario y le añadimos el form que acabamos de crear
        
        form.appendChild(btnCerrar(containerFormUser));

        containerFormUser.appendChild(form);
    });
}

/**
 * Al pulsar en el boton de editar creamos un formulario para editar el campo
 * @param {*} id 
 */
export function containerFormCampo(id) {

    console.log(id);
    

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
        let placeholders = ['Introduce el nombre de la pista', 'Introduce el precio por hora', 'Selecciona la modalidad', 'Selecciona la disponibilidad'];
        let values = []; 

        names.forEach(name => { // si el name es 'precio_hora' le quitamos los decimales en el input
            name == 'precio_hora' ? values.push(info_campo[name].slice(0, -3)) : values.push(info_campo[name]);             
        })
            
        const form = crearFormulario(labels, names, types, values, placeholders, '/TFG/editCampo'); 
        form.setAttribute('data-campo-id', id);
        editar(form)

        form.append(btnCerrar(containerFormCampo));

        containerFormCampo.appendChild(form)
        
    })
}


/**
 * Al pulsar en el boton de editar creamos un formulario para editar el horario
 * @param {*} id 
 */
export function containerFormHorario(id, nombre_campo) {
    
    let containerFormHorario = document.querySelector(".containerFormHorario");   
      
    containerFormHorario.classList.toggle("visible");

    const existingForm = containerFormHorario.querySelector("form");
    if (existingForm) {
        existingForm.remove();
    }

    getHorarioById(id).then(horario => {                
        let infoHorario = horario.info; 

        let labels = ['Fecha', 'Hora de inicio', 'Disponible']; 
        let names = ['fecha', 'hora_inicio','disponible']; 
        let types = ['date', 'text', 'number']; 
        let placeholders = ['Introduce la fecha', 'Introduce la hora de inicio', 'Selecciona la disponibilidad'];
        let values = [];

        names.forEach(name => {
            values.push(infoHorario[name])            
        })

        const form = crearFormulario(labels, names, types, values, placeholders, '/TFG/editarHorario');
        form.setAttribute('data-horario-id', id);
        form.setAttribute('data-nombre-campo', nombre_campo)
        editar(form); 

        form.append(btnCerrar(containerFormHorario)); 

        containerFormHorario.appendChild(form)
    })
}


export function crearHorario() {

    
    let containerFormHorario = document.querySelector(".containerFormHorario");   
    let btn_crear_horario = document.querySelector(".crear-horario"); 
    
    btn_crear_horario.addEventListener("click", () => {
        document.body.style.overflow = "hidden"; // cuando se haga click evitamos el scroll
    
        // Hacer scroll hacia arriba para que el administrador vea el formulario
        window.scrollTo({ top: 0, behavior: "smooth" });

        containerFormHorario.classList.toggle("visible");
        const existingForm = containerFormHorario.querySelector("form");
        if (existingForm) {
            existingForm.remove();
        }    

        let labels = ["Fecha", "Hora inicio", "Pista"]; 
        let names = ["fecha", "hora_inicio", "pista_id"]; 
        let types = ["date", "number", "number"]; 

        const form = crearFormulario(labels,names,types,[],[],'/TFG/crearHorario');
        editar(form);  
        form.append(btnCerrar(containerFormHorario)); 

        containerFormHorario.append(form); 

 
    })

}



