
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

function modificarDesplegable() {
    const desplegable = document.querySelector(".desplegable"); 
    // Cambiar el elnace de inicio de sesión por el de 'ver perfil'
    desplegable.children[4].textContent = "Ver perfil"; 
    desplegable.children[4].href = "/TFG/perfil"; 
}



function navUsuario() {
    modificarDesplegable()
}

function modificarNav(rol) {
    rol == 1 ? navUsuario() : navAdministrador()
}


logueado().then(data => {
    modificarNav(data.rol)
    
}) 
