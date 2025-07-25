import { getUsuarios} from "./../services/usuario.js";
import { getCampos } from "./../services/campo.js";
import { getReservas } from "./../services/reservas.js";
import { getAll, getFechasActualizadas } from "./../services/franja_horaria.js";
import { crearTituloSeccion } from "./acciones_perfil.js";
import { buscadorUsuario } from "./buscador.js";
import { accionesContainer, crearBoton, crearHorario} from "./boton.js";
import { crearTabla } from "./tabla.js";
import { crearInput } from "./form_elements.js";
import { editUser, editarCampo, editarHorario } from "./admin/editar.js";
import { deleteUser, deleteCampo, deleteHorario } from "./admin/eliminar.js";




/**
 * Crear tabla para ver los usuarios
 */
export function mostrarTablaUsuarios() {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");
    // creamos el titulo de la sección
    let titulo = crearTituloSeccion("Lista de usuarios")
    userInfoContainer.appendChild(titulo); // añadimos el titulo al contenedor
    userInfoContainer.appendChild(buscadorUsuario())

    // Recogemos todos los usuarios registrados y creamos una tabla con su informacion
    getUsuarios().then(usuarios => {
        let lista_usuarios = usuarios.usuarios;

        // creamos la tabla para mostrar los usuarios
        let headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Acciones'];
        // let data = lista_usuarios.map(usuario => [
        //     usuario.id, 
        //     usuario.nombre, 
        //     usuario.email, 
        //     usuario.tlf,
        //     accionesContainer()   
        // ]);

        let data = lista_usuarios.map(usuario => {

            return [
                usuario.id, 
                usuario.nombre, 
                usuario.email, 
                usuario.tlf,
                accionesContainer()
            ]
        }); 

        let tabla_usuarios = crearTabla(headers, data);
        userInfoContainer.appendChild(tabla_usuarios); // añadimos la tabla al contenedor
        // Llamar a las funciones para editar y eliminar usuarios
        editUser(); 
        deleteUser(); 


    });
    
    return userInfoContainer; 
}


/**
 * Crear tabla para ver las reservas
 */
export function mostrarTablaReservas() {

    const tabla_reservas_container = document.createElement("section");
    tabla_reservas_container.classList.add("reservas-container");

    let titulo = crearTituloSeccion("Lista de reservas"); 
    let input_fecha = crearInput('fecha', 'date', ''); 
    input_fecha.id = "input_fecha"; 
    tabla_reservas_container.appendChild(titulo); // añadimos el titulo al contenedor
    tabla_reservas_container.appendChild(input_fecha); 

    getReservas().then(reservas => {     
        
        let listas_reservas = reservas.reservas; // recogemos las reservas de la BBDD

        let headers = ['ID reserva','ID usuario','Campo', 'Fecha y hora de la reserva'];
        let data = listas_reservas.map(reserva => [
            reserva.id,
            reserva.usuario_id,
            reserva.nombre_pista, 
            reserva.fechaHora
        ]); 

        let tabla_reservas = crearTabla(headers, data); // creamos la tabla con los datos

        input_fecha.addEventListener("input", async (ev) => {

            if (ev.target.value == "") {
                
                tabla_reservas_container.querySelector("table").remove();
                tabla_reservas_container.appendChild(tabla_reservas); // añadimos la tabla al contenedor
                
            }else{
                try {
                    const response = await fetch('/TFG/reservasByFecha', {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json'
                        }, 
                        body:JSON.stringify({
                            fecha: ev.target.value 
                        }) 
                    }); 
    
                    const data = await response.json();                     
    
                    if (data.reservas.length != 0) {
                        let tabla = tabla_reservas_container.querySelector("table"); 
                        
                        if (tabla) {
                            tabla_reservas_container.querySelector("table").remove(); 
                        }
                          
                        let datos_tabla = data.reservas.map(reserva => [
                            reserva.id,
                            reserva.usuario_id,
                            reserva.nombre_pista, 
                            reserva.fechaHora
                        ])
                        
                        tabla_reservas_container.appendChild(crearTabla(headers,datos_tabla))
                    }else{
                        tabla_reservas_container.querySelector("table").textContent = "No hay reservas para esta fecha"
                    }
                    
    
                } catch (error) {
                    console.log(error);
                    
                }
            }
            
        })


        tabla_reservas_container.appendChild(tabla_reservas); // añadimos la tabla al contenedor
        
    })

    return tabla_reservas_container;
}

/**
 * Crear tabla para ver los campos
 */
export function mostrarTablaCampos() {

    const tabla_campos_contaier = document.createElement("section");
    tabla_campos_contaier.classList.add("campos-container");

    let titulo = crearTituloSeccion("Lista de campos");

    tabla_campos_contaier.appendChild(titulo); // añadimos el titulo al contenedor

    getCampos().then(campos => {
        
        let headers = ['ID', 'Pista', 'Precio','Disponible','Acciones'];
        let data = campos.map(campo => [
            campo.id, 
            campo.nombre, 
            `${campo.precio_hora}€`, 
            // campo.modalidad_id === 1 ? 'Futbol' : campo.modalidad_id === 2 ? 'Tenis' : 'Padel',
            campo.disponible === 1 ? 'Si' : 'No', 
            accionesContainer()
        ]);

        let tabla_campos = crearTabla(headers, data); // creamos la tabla con los datos
        tabla_campos_contaier.appendChild(tabla_campos); // añadimos la tabla al contenedor

        // llamamos a las funciones de editar y eliminar campo
        editarCampo(); 
        deleteCampo();  

    });

    

    return tabla_campos_contaier;
}

/**
 * Mostrar tabla de horarios
 */
export function mostrarTablaHorarios() {

    const tabla_horarios_container = document.createElement("section"); 
    tabla_horarios_container.classList.add("horarios_container"); 

    let titulo = crearTituloSeccion("Lista de horarios");

    tabla_horarios_container.appendChild(titulo); 
    tabla_horarios_container.appendChild(crearBoton("Crear horario", "crear-horario")); 

    getAll().then(horarios => {        

        let listaHorarios = horarios.horarios;         

        let headers = ['ID', 'Fecha', 'Hora de inicio', 'Disponible', 'Campo', 'Acciones']; 

        // Variables para la paginación
        const itemsPerPage = 5;
        let currentPage = 1;
        const totalPages = Math.ceil(listaHorarios.length / itemsPerPage);

        function renderPage(page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const data = listaHorarios.slice(start, end).map(horario => [
                horario.id, 
                horario.fecha, 
                horario.hora_inicio.slice(0, -3), 
                horario.disponible === 1 ? 'Si' : 'No', 
                horario.nombre, 
                accionesContainer()
            ]);

            // Limpiar tabla existente
            const existingTable = tabla_horarios_container.querySelector("table");
            if (existingTable) existingTable.remove();

            // Añadir nueva tabla
            tabla_horarios_container.appendChild(crearTabla(headers, data));

            // Llamar a las funciones de editar y eliminar horario después de renderizar la tabla
            editarHorario(); 
            deleteHorario(); 
        }

        function renderPagination() {
            const paginationContainer = document.createElement("div");
            paginationContainer.classList.add("pagination-container");

            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement("button");
                pageButton.textContent = i;
                pageButton.classList.add("page-button");
                pageButton.classList.add('btn'); 
                if (i === currentPage) pageButton.classList.add("active");

                pageButton.addEventListener("click", () => {
                    currentPage = i;
                    renderPage(currentPage);

                    // Actualizar botones activos
                    document.querySelectorAll(".page-button").forEach(btn => btn.classList.remove("active"));
                    pageButton.classList.add("active");
                });

                paginationContainer.appendChild(pageButton);
            }

            // Limpiar paginación existente
            const existingPagination = tabla_horarios_container.querySelector(".pagination-container");
            if (existingPagination) existingPagination.remove();

            // Añadir nueva paginación debajo del botón "Crear horario"
            const crearHorarioButton = tabla_horarios_container.querySelector(".crear-horario");
            if (crearHorarioButton) {
                crearHorarioButton.insertAdjacentElement("afterend", paginationContainer);
            } else {
                tabla_horarios_container.appendChild(paginationContainer);
            }
        }

        // Renderizar la primera página y la paginación
        renderPage(currentPage);
        renderPagination();

        // Llamar a las funciones de crear horario
        crearHorario(); 
    });

    return tabla_horarios_container; 
}


/**
 * Función para asignar una función a los botones de la barra lateral
 */
export function AsideBtns() {
    const content = document.querySelector(".content");
    
    // cambiamos el texto del botón de ver usuarios
    let btn_user_info = document.getElementById("btn_user_info");
    btn_user_info.childNodes[1].textContent = "Ver usuarios"

    // cuando se pulse un boton se borra el contenido de la sección y se añade el nuevo
    btn_user_info.addEventListener("click", () => {
        content.innerHTML = ""; 
        content.append(mostrarTablaUsuarios()); // mostramos los usuarios registrados
    });
    
    let btn_reservas = document.getElementById("btn_user_reservas");
    btn_reservas.addEventListener("click", () => {
        content.innerHTML = ""; // limpiamos el contenido
        content.append(mostrarTablaReservas()); // mostramos las reservas del usuario
    })

    // creamos el botón para ver las reservas
    let btn_campos = document.createElement("button");
    btn_campos.innerHTML = '<i class="fa-solid fa-futbol"></i> Ver campos';
    
    btn_campos.addEventListener("click", () => {
        content.innerHTML = ""; // limpiamos el contenido
        content.append(mostrarTablaCampos()); // mostramos los campos
    });

    // creamos el boton para ver las franjas horarias
    let btn_horarios = document.createElement("button");
    btn_horarios.innerHTML = '<i class="fa-solid fa-clock"></i> Ver horarios'; 

    btn_horarios.addEventListener("click", () => {
        content.innerHTML = ''; 
        content.append(mostrarTablaHorarios()); 
    })

    let aside = document.querySelector("aside");
    if (aside) {
        aside.appendChild(btn_campos); // añadimos el botón al aside
        aside.appendChild(btn_horarios); 
    }
}

