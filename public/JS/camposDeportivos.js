import { getCampos } from "./services/campo";
import { cartaCampo } from "./components/cardCampo";


getCampos().then(array_campos => {
    array_campos.forEach(campo => {
        
        const camposContainer = document.querySelector(".campos-container"); 
        camposContainer.appendChild(cartaCampo(campo.id,campo.nombre, campo.precio_hora, campo.disponible))
    });
    
})