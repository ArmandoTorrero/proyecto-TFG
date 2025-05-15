import { userInfo } from "./../services/usuario.js";
import { crearBoton } from "./boton.js";
import { getReservasByUserId, eliminarReserva } from "./../services/reservas.js";
import { crearInput, crearLabel, editar } from "./form_elements.js";
import { crearTabla } from "./tabla.js";
import { crearTituloSeccion } from "./acciones_perfil.js";



export function cardUserInfo(rol) {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");

    // Comprobar si el rol es falso, si es así, no se mostrará la información del usuario
    if (!rol) {
        window.location.href = '/TFG/login';
        let titulo = document.createElement("h2");
        titulo.textContent = "Inicia sesión para ver tu información";

        userInfoContainer.appendChild(titulo)
    }else{
        userInfo().then(info => {
            
            // recogemos la información del usuario que devuelve la promesa
            let user_info = info.info            
    
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
            let boton = crearBoton('Guardar cambios','btn-enviar'); 
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
        window.location.href = '/TFG/login'; 
    } else {

        let titulo = crearTituloSeccion("Tus reservas");

        getReservasByUserId().then(reservas => {

            let reservas_usuario = reservas.reservas; // recogemos las reservas del usuario
            
            console.log(reservas_usuario);
            
            let headers = ['ID reserva', 'Pista', 'Fecha - Hora de reserva', 'Fecha del partido', 'Hora del partido' ,'Cancelar'];
            let data = reservas_usuario.map(reserva => {

                // Creamos el botón de cancelar la reserva
                let cancelarButton = document.createElement("button");
                cancelarButton.textContent = "Cancelar";

                // Comprobamos si se puede cancelar la reserva
                const fechaReserva = new Date(reserva.fechaHora);
                const fechaActual = new Date();
                const diferenciaHoras = (fechaActual - fechaReserva) / (1000 * 60 * 60);

                // si se puede cancelar le asignamos la clase 'cancelable'
                if (diferenciaHoras <= 24) {
                    cancelarButton.classList.add("cancelable");

                    // Añadimos el evento click al botón
                    cancelarButton.addEventListener("click", (ev) => {      
                        
                        // Le mostramos una alerta para saber si esta seguro de que quiere eliminar la reserva
                        Swal.fire({
                            title: "¿Estás seguro de que quieres cancelar la reserva?",
                            text: "No podrás revertirlo.",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Eliminar"
                        }).then((result) => {
                            if (result.isConfirmed) { // si confirma la cancelacion enviamos el id de la reserva y del horario
                                eliminarReserva(reserva.id, reserva.franja_horaria_id).then(response => {
                                    if (response.exito) { // si la respuesta es exitosa se lo indicamos por pantalla y eliminamos la fila 
                                        ev.target.parentElement.parentElement.remove(); 
                                        Swal.fire("Reserva cancelada!", response.mensaje, "success");
                                    }else{
                                        Swal.fire("Error", response.mensaje, "error");
                                    }
                                    
                                })
                            }
                        });   
                                        
                    });
                } else {
                    cancelarButton.classList.add("no-cancelable");
                }

                // devolvemos la información necesario para la tabla
                return [
                    reserva.id,
                    reserva.nombre_pista,
                    reserva.fechaHora,
                    reserva.fecha,
                    reserva.hora_inicio.slice(0, -3), 
                    cancelarButton
                ];
            });

            let tabla_reservas = crearTabla(headers, data); // creamos la tabla con los datos
            tabla_reservas_container.append(titulo, tabla_reservas); // añadimos la tabla al contenedor

            // si el usuario no tiene reservas se lo hacemos saber 
            if (reservas.reservas.length == 0) {
                let noReservas = crearTituloSeccion("No tienes reservas");
                tabla_reservas_container.appendChild(noReservas);
            }

        });
    }

    return tabla_reservas_container; // devolvemos el contenedor con la tabla de reservas
}