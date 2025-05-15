import { logueado } from "./services/usuario.js";
import { cambiarPerfil, addBtnCerrarSesion } from "./components/acciones_perfil.js";


document.addEventListener("DOMContentLoaded", () => {
    logueado().then(response => {    
        cambiarPerfil(response.rol)
        addBtnCerrarSesion(response.rol)
    })
})
