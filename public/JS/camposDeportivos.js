import { getCampos } from "./services/campo";
import { cartaCampo } from "./components/cardCampo";
import { aplicarAnimacion } from "./components/animaciones";

document.addEventListener("DOMContentLoaded", () => {
    
    
    getCampos().then(array_campos => {
        array_campos.forEach(campo => { // por cada campo cramos una carta para el. 
            
            const camposContainer = document.querySelector(".campos-container"); 
            camposContainer.appendChild(cartaCampo(
                campo.id,
                campo.nombre, 
                campo.precio_hora, 
                campo.disponible, 
                campo.modalidad_id
            ))
            aplicarAnimacion('.campo', 'fadeIn'); 
        });    
    })
    
})





