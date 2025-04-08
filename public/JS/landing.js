
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

function landingUsuario() {
    const preeFooterButtons = document.querySelector(".pre-footer > .buttons")
    preeFooterButtons.children[0].style.display = "none"; 
}

function modificarLandingPage(rol) {
    rol == 1 ? landingUsuario() : ''; 
}

logueado().then((data) => {
    modificarLandingPage(data.rol)
    
}).catch((err) => {
    console.log(err);
    
});
