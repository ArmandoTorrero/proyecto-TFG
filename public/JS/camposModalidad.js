import { cartaCampo } from "./components/cardCampo";
import { modalidad, getCamposByModalidadId } from "./services/campo.js";

modalidad().then(data => {
    console.log(data);
    
    getCamposByModalidadId(data.modalidad).then(campos => {

        let camposContainer = document.querySelector(".campos-container");

        campos.campos_modalidad.forEach(campo => {
            
            camposContainer.appendChild(cartaCampo(campo.id,campo.nombre,campo.precio_hora,campo.disponible));
            
        });
        
    })
    
})
