import { logueado } from "./services/usuario";

/**
 * Modificar el desplegable del menu hamburguesa
 */
function modificarDesplegable() {
    const desplegable = document.querySelector(".desplegable"); 
    // Cambiar el elnace de inicio de sesión por el de 'ver perfil'
    desplegable.children[4].textContent = "Ver perfil"; 
    desplegable.children[4].href = "/TFG/perfil"; 
}

/**
 * Modificar el boton del nav 'registrate' a 'ver perfil'
 */
function cambiarBtnregistro() {
    const btnRegistro = document.querySelector(".registro > a")
    btnRegistro.textContent = "Ver perfil"; 
    btnRegistro.href = "/TFG/perfil"; 
}

function modificarNav(rol) {
    if (rol == 1 || rol == 2) { // si es admin o usuario
        modificarDesplegable()
        cambiarBtnregistro() 
    }
}


logueado().then(data => {    
    modificarNav(data.rol)
    
})
