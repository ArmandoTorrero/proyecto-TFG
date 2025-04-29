import { cardUserInfo } from "./cardUserInfo.js";


/**
 * Función para el perfil de usuario la cula alamcena todo lo que puede hacer el usuario en su perfil. 
 * @param {*} rol 
 */
function perfil_usuario(rol) { 

    const content = document.querySelector(".content"); 


    content.append(cardUserInfo(rol)); 
}

/**
 * Función para el perfil de administrador
 */
function perfil_admin() { 
    console.log("soy un admin");
    
}


/**
 * Segun el rol del usuario, se le asigna un perfil diferente
 * @param {*} rol 
 */
export function cambiarPerfil(rol) {
    rol != 2 ? perfil_usuario(rol) : perfil_admin(); 
    
}