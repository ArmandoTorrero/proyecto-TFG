import { cardUserInfo, reservasUsuario } from "./cardUserInfo.js";
import * as Admin from "./admin.js";

export function crearTituloSeccion(textoTitulo) {
    const titulo = document.createElement("h1");
    titulo.textContent = textoTitulo;
    titulo.classList.add("titulo-perfil");
    return titulo;
    
}


/**
 * Función para el perfil de usuario la cual almacena todas las funciones que puede hacer el usuario en su perfil. 
 * @param {*} rol 
 */
function perfil_usuario(rol) { 

    const content = document.querySelector(".content"); 
    content.append(cardUserInfo(rol));
    
    let btn_user_info = document.getElementById("btn_user_info");
    let btn_reservas = document.getElementById("btn_user_reservas");

    btn_user_info.addEventListener("click", () => {
        content.innerHTML = ""; // limpiamos el contenido
        content.append(cardUserInfo(rol)); // mostramos las reservas del usuario
    });

    btn_reservas.addEventListener("click", () => {
        content.innerHTML = ""; // limpiamos el contenido
        content.append(reservasUsuario(rol)); // mostramos las reservas del usuario
    });


}


/**
 * Función para cerrar sesión
 * @param {*} rol 
 */
export function addBtnCerrarSesion(rol) {
    if (rol) {
        const formCerrarSesion = document.createElement("form");
        formCerrarSesion.id = "formCerrarSesion";
        formCerrarSesion.method = "POST";
        formCerrarSesion.action = "/TFG/cerrarSesion";

        const btnCerrarSesion = document.createElement("button");
        btnCerrarSesion.type = "submit";
        btnCerrarSesion.textContent = "Cerrar sesión";

        formCerrarSesion.appendChild(btnCerrarSesion);

        const asideElement = document.querySelector("aside");
        if (asideElement) {
            asideElement.appendChild(formCerrarSesion);
        }

        formCerrarSesion.addEventListener("submit", async (event) => {
            event.preventDefault();
            try {
                const response = await fetch("/TFG/cerrarSesion", {
                    method: "POST",
                });
                if (response.ok) {
                    window.location.href = "/TFG/";
                } else {
                    console.error("Error al cerrar sesión");
                }
            } catch (error) {
                console.error("Error de red al cerrar sesión", error);
            }
        });
    }
}

/**
 * Función para el perfil de administrador
 */
function perfil_admin() { 
    const content = document.querySelector(".content"); 
    content.appendChild(Admin.mostrarTablaUsuarios()); // mostramos la tabla de usuarios    
    Admin.AsideBtns(); 

}


/**
 * Segun el rol del usuario, se le asigna un perfil diferente
 * @param {*} rol 
 */
export function cambiarPerfil(rol) {
    
    if (rol == 2) {
        perfil_admin();
    }else{
        perfil_usuario(rol);
    }
}

