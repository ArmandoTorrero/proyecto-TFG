import { cartaCampo } from "./components/cardCampo";
import { modalidad, getCamposByModalidadId } from "./services/campo.js";
import { aplicarAnimacion } from "./components/animaciones.js";

document.addEventListener("DOMContentLoaded", () => {

    modalidad().then(data => {
        
        getCamposByModalidadId(data.modalidad).then(campos => { 
    
            let camposContainer = document.querySelector(".campos-container");
    
            // por cada campo creamos una carta para el 
            campos.campos_modalidad.forEach(campo => {            
                
                camposContainer.appendChild(cartaCampo(
                    campo.id,
                    campo.nombre,
                    campo.precio_hora,
                    campo.disponible,
                    campo.modalidad_id
                ));
                
            });
            
            aplicarAnimacion('.campo', 'fadeIn');
        })
        
    })
})

