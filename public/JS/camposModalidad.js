import { cartaCampo } from "./components/cardCampo";
import { modalidad, getCamposByModalidadId } from "./services/campo.js";

modalidad().then(data => {
    
    getCamposByModalidadId(data.modalidad).then(campos => {
        console.log(campos);
        
    })
    
})
