import { logueado } from "./services/usuario";
import { cambiarPerfil, addBtnCerrarSesion } from "./components/acciones_perfil";


document.addEventListener("DOMContentLoaded", () => {
    logueado().then(response => {    
        cambiarPerfil(response.rol)
        addBtnCerrarSesion(response.rol)
    })
})
