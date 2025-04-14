import { cartaCampoDestacado } from "./components/campoDestacado";
import { getCampos } from "./services/campo";
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


getCampos().then(array_campos =>{
    const pistas_destacadas_container = document.querySelectorAll(".pistas-destacadas > .pistas")[0]; 

    for (let i = 0; i < pistas_destacadas_container.childElementCount; i++) {

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
