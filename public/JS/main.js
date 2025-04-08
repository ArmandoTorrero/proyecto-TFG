
/**
 *
 * Obtener el rol del usuario
 * @return {*} 
 */
async function logueado () {
    try {
        let response = await fetch('/TFG/logueado'); 
        let data = await response.json(); 
        return data
        
    } catch (error) {
        console.error(error);
        
    }
}

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

// Modificar el nav del usuario
function navUsuario() {
    modificarDesplegable()
    cambiarBtnregistro()
}

function modificarNav(rol) {
    rol == 1 ? navUsuario() : navAdministrador()
}


logueado().then(data => {
    modificarNav(data.rol)
    
}) 
