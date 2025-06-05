import { cardCampoDestacado} from "./components/campoDestacado.js";
import { aplicarAnimacion } from "./components/animaciones.js";
import { getCampos } from "./services/campo.js";
import { logueado } from "./services/usuario.js";
import { panelCookies } from "./components/cookies.js";

/**
 * Modificar la landing cuando el usuario se registra
 */
function landingUsuarioRegistrado() {
    const preeFooterButtons = document.querySelector(".pre-footer > .buttons")
    preeFooterButtons.children[0].style.display = "none"; 
}




/**
 * Funcion para modificar la landing page en funcion del rol
 * @param {*} rol 
 */
function modificarLandingPage(rol) {

    rol != false ? landingUsuarioRegistrado() : ''; 

}

document.addEventListener("DOMContentLoaded", () => {

    panelCookies(); 

    aplicarAnimacion('.info > h1',  'fadeIn');
    aplicarAnimacion('.info > p',  'fadeIn');  
    aplicarAnimacion('.containers', 'fadeInRight'); 
    aplicarAnimacion('.pista', 'fadeInLeft'); 
    aplicarAnimacion('.pre-footer', 'fadeIn'); 

    logueado().then((data) => {        
        modificarLandingPage(data.rol)
    }).catch((err) => {
        console.log(err);
    });

    getCampos().then(array_campos =>{
        
        const pistas_destacadas_container = document.querySelectorAll(".pistas-destacadas > .pistas")[0]; 
    
        for (let i = 0; i < 3; i++) {
            pistas_destacadas_container.appendChild(cardCampoDestacado(array_campos[i].id, array_campos[i].nombre, array_campos[i].precio_hora, array_campos[i].modalidad_id, array_campos[i].disponible));
            
        }
    })

    
})



