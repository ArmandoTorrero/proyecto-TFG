import { logueado } from "./services/usuario";

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
