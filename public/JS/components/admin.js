import { getUsuarios } from "../services/usuario";
import { getCampos } from "../services/campo";
import { getReservas } from "../services/reservas";
import { alerta } from "../components/alerta";
import { crearBoton } from "../components/boton";
import { crearTabla } from "../components/tabla";
import { crearTituloSeccion } from "../components/acciones_perfil";



/**
 * Crear tabla para ver los usuarios
 */
export function mostrarTablaUsuarios() {

    const userInfoContainer = document.createElement("section");
    userInfoContainer.classList.add("user-info-container");

    getUsuarios().then(usuarios => {
        let lista_usuarios = usuarios.usuarios;

        // creamos el titulo de la sección
        let titulo = crearTituloSeccion("Lista de usuarios")

        userInfoContainer.appendChild(titulo); // añadimos el titulo al contenedor

        // creamos la tabla para mostrar los usuarios
        let headers = ['ID', 'Nombre', 'Email', 'Telefono'];
        let data = lista_usuarios.map(usuario => [usuario.id, usuario.nombre, usuario.email, usuario.tlf]);

        let tabla_usuarios = crearTabla(headers, data);
        userInfoContainer.appendChild(tabla_usuarios); // añadimos la tabla al contenedor
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
        console.log(reservas);
        
        
        let titulo = crearTituloSeccion("Lista de reservas")
        tabla_reservas_container.appendChild(titulo); // añadimos el titulo al contenedor

        let listas_reservas = reservas.reservas; // recogemos las reservas de la BBDD
        let headers = ['ID Pista', 'Campo', 'Fecha', 'Hora Inicio'];
        let data = listas_reservas.map(reserva => [reserva.pista_id, reserva.nombre_pista, reserva.fecha, reserva.hora_inicio.slice(0, -3)]); 

        let tabla_reservas = crearTabla(headers, data); // creamos la tabla con los datos
        tabla_reservas_container.appendChild(tabla_reservas); // añadimos la tabla al contenedor
        
    })

    return tabla_reservas_container;
}

/**
 * Crear tabla para ver los campos
 */
export function mostrarTablaCampos() {
    getCampos().then(campos => {
        console.log(campos);
    });
}

export function AsideBtns() {
    const content = document.querySelector(".content"); 
    let btn_user_info = document.getElementById("btn_user_info");
    btn_user_info.childNodes[1].textContent = "Ver usuarios"

    btn_user_info.addEventListener("click", () => {
        content.innerHTML = ""; // limpiamos el contenido
        content.append(mostrarTablaUsuarios()); // mostramos las reservas del usuario
    });
    
    let btn_reservas = document.getElementById("btn_user_reservas");
    btn_reservas.addEventListener("click", () => {
        content.innerHTML = ""; // limpiamos el contenido
        content.append(mostrarTablaReservas()); // mostramos las reservas del usuario
    })

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




