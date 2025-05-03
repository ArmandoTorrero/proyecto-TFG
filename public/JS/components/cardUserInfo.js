import { userInfo } from "../services/usuario";
import { crearBoton } from "../components/boton";
import { getReservasByUserId } from "../services/reservas";
import { crearInput, crearLabel, editar } from "./form_elements";
import { crearTabla } from "../components/tabla";
import { crearTituloSeccion } from "../components/acciones_perfil";



export function cardUserInfo(rol) {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");

    // Comprobar si el rol es falso, si es así, no se mostrará la información del usuario
    if (!rol) {
        window.location.href = '/TFG/';
        let titulo = document.createElement("h2");
        titulo.textContent = "Inicia sesión para ver tu información";

        userInfoContainer.appendChild(titulo)
    }else{
        userInfo().then(info => {
            
            // recogemos la información del usuario que devuelve la promesa
            let user_info = info.info
            console.log(user_info);
            
    
            // creamos el titulo de la sección
            let titulo = crearTituloSeccion("Información de usuario"); 
    
            // creamos el h2 para el nombre de usuario
            let username = document.createElement("h2"); 
            username.textContent = (rol == 1) ? user_info.nombre : 'Usuario invitado';
            username.classList.add("username");
    
            // creamos un formulario para que el usuario pueda modificar sus datos. 
            let formulario = document.createElement("form");
            formulario.method = "POST";
            formulario.action = "/TFG/editarUsuario"; 
    
    
            // creamos los labels y los inputs para el formulario
    
            let array_content_label = ['Nombre','Email','Telefono'];
            let array_input_names = ['nombre','email','tlf'];
            let array_input_types = ['text','email','number']; 
    
            let label; 
            let input; 
    
            // introducimos los datos dinamicamente
            for (let i = 0; i < 3; i++) {
    
                // creamos los input y los labels para el formulario, y un contenedor para guardarlos
                let input_label_container = document.createElement("article"); 
                input_label_container.classList.add("input-label-container");
                
                label = crearLabel(array_content_label[i] + ": ");
                input = crearInput(array_input_names[i], array_input_types[i]);
                input.value = user_info[array_input_names[i]]
    
                input_label_container.append(label, input);
                formulario.appendChild(input_label_container);            
            }

            // creamos un botón para enviar el formulario
            let boton = crearBoton('btn-enviar'); 
            boton.textContent = "Guardar cambios";
            boton.type = "submit";

            formulario.appendChild(boton);

            editar(formulario)
            
    
            // Adjuntamos la información al contenedor
            userInfoContainer.append(titulo, username,formulario);
                    
        })
    }
        
    return userInfoContainer;

}

/**
 * Función para mostrar las reservas del usuario.
 * @param {*} rol 
 */
export function reservasUsuario(rol) {

    const tabla_reservas_container = document.createElement("section");
    tabla_reservas_container.classList.add("reservas-usuario-container");

    if (!rol) {
        console.log('patata');
    }else{

        let titulo = crearTituloSeccion("Tus reservas"); 

        getReservasByUserId().then(reservas => {
            
            let reservas_usuario = reservas.reservas; // recogemos las reservas del usuario
            
            let headers = ['Pista', 'Fecha', 'Hora', 'Precio'];
            let data = reservas_usuario.map(reserva => [reserva.nombre_pista, reserva.fecha, reserva.hora_inicio, reserva.precio_hora]); 
            
            
            let tabla_reservas = crearTabla(headers, data); // creamos la tabla con los datos
            tabla_reservas_container.append(titulo,tabla_reservas); // añadimos la tabla al contenedor            

        })
    }

    return tabla_reservas_container; // devolvemos el contenedor con la tabla de reservas

}