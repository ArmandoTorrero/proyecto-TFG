import { cartaCampoDestacado } from "./components/campoDestacado";
import { getCampos } from "./services/campo";
import { logueado } from "./services/usuario";

/**
 * Modificar la landing cuando el usuario se registra
 */
function landingUsuario() {
    const preeFooterButtons = document.querySelector(".pre-footer > .buttons")
    preeFooterButtons.children[0].style.display = "none"; 
}


/**
 * Modificar landing para el invitado
 */ 
function landingInvitado() {
     const pistas_destacadas_buttons = document.querySelectorAll(".precio-button > .ver-detalles")
     pistas_destacadas_buttons.forEach(button => {
        button.style.display = "none"; 
        console.log(button);
        
     });
     
}

/**
 * Funcion para modificar la landing page en funcion del rol
 * @param {*} rol 
 */
function modificarLandingPage(rol) {

    if (rol != false) {
        rol == 1 ? landingUsuario() : ''; 
    }else{
        landingInvitado()
    }
}

logueado().then((data) => {
    
    modificarLandingPage(data.rol)
    
}).catch((err) => {
    console.log(err);
    
});


getCampos().then(array_campos =>{
    const pistas_destacadas_container = document.querySelectorAll(".pistas-destacadas > .pistas")[0]; 

    for (let i = 0; i < 3; i++) {

        let campo = pistas_destacadas_container.children[i]
        let campo_img = campo.children[0]; 
        let content = campo.children[1];
        let content_h2 = content.children[0];
        let precio = content.children[1].children[0];
        let enlace = content.children[1].children[1].children[0];
        
        let categoria = campo.children[2];        

        cartaCampoDestacado(array_campos[i].id, array_campos[i].nombre, array_campos[i].precio_hora, array_campos[i].modalidad_id,content_h2,campo_img,precio,enlace,categoria)
        
    }
})
