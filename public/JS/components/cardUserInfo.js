import { userInfo } from "../services/usuario";
import { crearBoton } from "../components/boton";
import { alerta } from "../components/alerta";

export function cardUserInfo(rol) {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");

    // Comprobar si el rol es falso, si es así, no se mostrará la información del usuario
    if (!rol.rol) {
        userInfoContainer.innerText = "Patata"
    }else{
        userInfo().then(info => {
            
            // recogemos la información del usuario que devuelve la promesa
            let user_info = info.info
    
            // creamos el titulo de la sección
            let titulo = document.createElement("h1");
            titulo.textContent = "Información de usuario";
            titulo.classList.add("titulo-perfil");
    
            // creamos el h2 para el nombre de usuario
            let username = document.createElement("h2"); 
            username.textContent = (rol.rol == 1) ? user_info.nombre : 'Usuario invitado';
            username.classList.add("username");
    
            // creamos un formulario para que el usuario pueda modificar sus datos. 
            let formulario = document.createElement("form");
            formulario.method = "POST";
    
    
            // creamos los labels y los inputs para el formulario
    
            let array_datos = ['Nombre','Email','Telefono'];
            let array_names = ['nombre','email','tlf'];
            let array_types = ['text','email','number']; 
    
            let label; 
            let input; 
    
            // introducimos los datos dinamicamente
            for (let i = 0; i < 3; i++) {
    
                // creamos los input y los labels para el formulario, y un contenedor para guardarlos
                let input_label_container = document.createElement("article"); 
                input_label_container.classList.add("input-label-container");
                
                label = crearLabel(array_datos[i] + ": ");
                input = crearInput(array_names[i], array_types[i]);
                input.value = user_info[array_names[i]]
    
                input_label_container.append(label, input);
                formulario.appendChild(input_label_container);            
            }

            // creamos un botón para enviar el formulario
            let boton = crearBoton('btn-enviar'); 
            boton.textContent = "Guardar cambios";
            boton.type = "submit";

            formulario.appendChild(boton);

            editarUsuarioForm(formulario)
            
    
            // Adjuntamos la información al contenedor
            userInfoContainer.append(titulo, username,formulario);
                    
        })
    }
        
    return userInfoContainer;

}

/**
 * Función para crear un input
 * @param {*} name 
 * @param {*} type 
 * @returns 
 */
function crearInput(name, type) {
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
function crearLabel(texoLabel) {
    let label = document.createElement("label"); 
    label.textContent = texoLabel;

    return label;
}


/**
 * Función para editar el usuario, recoge los datos del formulario y los envía al servidor
 * @param {*} form 
 */
function editarUsuarioForm(form) {
    // recogemos las alertas
    let alerta_verde = document.getElementById("alerta-verde");
    let alerta_roja = document.getElementById("alerta-roja"); 

    // evento para el submit del formulario
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault(); 

        const formData = new FormData(form); // recogemos los datos del formulario

        try {
            const response = await fetch('/TFG/editarUsuario', { // enviamos los datos al servidor
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