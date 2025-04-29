import { userInfo } from "../services/usuario";
import { crearBoton } from "../components/boton";
import { alerta } from "../components/alerta";
import { getReservasByUserId } from "../services/reservas";

export function cardUserInfo(rol) {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");

    // Comprobar si el rol es falso, si es así, no se mostrará la información del usuario
    if (!rol.rol) {
        let titulo = document.createElement("h2");
        titulo.textContent = "Inicia sesión para ver tu información";

        userInfoContainer.appendChild(titulo)
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

/**
 * Función para mostrar las reservas del usuario.
 * @param {*} rol 
 */
export function reservasUsuario(rol) {

    const tabla_reservas_container = document.createElement("section");
    tabla_reservas_container.classList.add("reservas-usuario-container");

    if (!rol.rol) {
        console.log('patata');
    }else{

        let tabla_reservas = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let tr_thead = document.createElement("tr");
         

        getReservasByUserId().then(reservas => {
            let reservas_usuario = reservas.reservas; // recogemos las reservas del usuario
            
            let headers = ['Pista', 'Fecha', 'Hora', 'Precio'];

            // Crear encabezados de la tabla
            headers.forEach(header => {
                let th = document.createElement("th");
                th.textContent = header;
                tr_thead.appendChild(th);
            });
            thead.appendChild(tr_thead);
            tabla_reservas.appendChild(thead);

            // Crear filas de la tabla con los datos de las reservas
            reservas_usuario.forEach(reserva => {
                let tr = document.createElement("tr");

                let tdNombrePista = document.createElement("td");
                tdNombrePista.textContent = reserva.nombre_pista;

                let tdFecha = document.createElement("td");
                tdFecha.textContent = reserva.fecha;

                let tdHora = document.createElement("td");
                tdHora.textContent = reserva.hora_inicio.slice(0, -3);

                let tdPrecio = document.createElement("td");
                tdPrecio.textContent = `${reserva.precio_hora}€`;

                tr.append(tdNombrePista, tdFecha, tdHora, tdPrecio);
                tbody.appendChild(tr);
            });

            tabla_reservas.appendChild(tbody);
            tabla_reservas_container.append(tabla_reservas); // añadimos la tabla al contenedor            

        })
    }

    return tabla_reservas_container; // devolvemos el contenedor con la tabla de reservas

}