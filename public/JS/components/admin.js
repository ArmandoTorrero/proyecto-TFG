import { getUsuarios } from "../services/usuario";
import { getCampos } from "../services/campo";
import { getReservas } from "../services/reservas";
import { accionesContainer, containerFormUser } from "../components/boton";
import { crearTabla } from "../components/tabla";
import { crearTituloSeccion } from "../components/acciones_perfil";




/**
 * Crear tabla para ver los usuarios
 */
export function mostrarTablaUsuarios() {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");

    // Recogemos todos los usuarios registrados y creamos una tabla con su informacion
    getUsuarios().then(usuarios => {
        let lista_usuarios = usuarios.usuarios;

        // creamos el titulo de la sección
        let titulo = crearTituloSeccion("Lista de usuarios")

        userInfoContainer.appendChild(titulo); // añadimos el titulo al contenedor

        // creamos la tabla para mostrar los usuarios
        let headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Acciones'];
        let data = lista_usuarios.map(usuario => [
            usuario.id, 
            usuario.nombre, 
            usuario.email, 
            usuario.tlf,
            accionesContainer()   
        ]);

        let tabla_usuarios = crearTabla(headers, data);
        userInfoContainer.appendChild(tabla_usuarios); // añadimos la tabla al contenedor

        // Asignamos el evento click a los botones de editar después de que la tabla esté en el DOM
        const botones_editar = userInfoContainer.querySelectorAll(".acciones-container button");
        botones_editar.forEach(boton => {
            boton.addEventListener('click', (event) => {
                const fila = event.target.closest('tr'); // Encuentra la fila más cercana al botón
                const id = fila.querySelector('td').textContent; // Obtiene el contenido del primer td
                containerFormUser(id); 
            });
        });
    });

    return userInfoContainer; 
}

/**
 * Crear tabla para ver las reservas
 */
export function mostrarTablaReservas() {

    const tabla_reservas_container = document.createElement("section");
    tabla_reservas_container.classList.add("reservas-container");

    getReservas().then(reservas => {        
                
        let titulo = crearTituloSeccion("Lista de reservas")
        tabla_reservas_container.appendChild(titulo); // añadimos el titulo al contenedor

        let listas_reservas = reservas.reservas; // recogemos las reservas de la BBDD
        let headers = ['ID usuario','ID Pista', 'Campo', 'Fecha', 'Hora Inicio'];
        let data = listas_reservas.map(reserva => [reserva.usuario_id,reserva.pista_id, reserva.nombre_pista, reserva.fecha, reserva.hora_inicio.slice(0, -3)]); 

        let tabla_reservas = crearTabla(headers, data); // creamos la tabla con los datos
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

    getCampos().then(campos => {

        let titulo = crearTituloSeccion("Lista de campos"); 
        tabla_campos_contaier.appendChild(titulo); // añadimos el titulo al contenedor

        let headers = ['ID', 'Pista', 'Precio/Hora', 'Modalidad','Acciones'];
        let data = campos.map(campo => [
            campo.id, 
            campo.nombre, 
            `${campo.precio_hora}€`, 
            campo.modalidad_id === 1 ? 'Futbol' : campo.modalidad_id === 2 ? 'Tenis' : 'Padel',
            accionesContainer()
        ]);

        let tabla_campos = crearTabla(headers, data); // creamos la tabla con los datos
        tabla_campos_contaier.appendChild(tabla_campos); // añadimos la tabla al contenedor

    });

    return tabla_campos_contaier;
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

    let aside = document.querySelector("aside");
    if (aside) {
        aside.appendChild(btn_campos); // añadimos el botón al aside
    }
}

