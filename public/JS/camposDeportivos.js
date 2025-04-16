import { getCampos, getCamposByModalidadId } from "./services/campo";
import { cartaCampo } from "./components/cardCampo";

// la primera vez que el usuario entre en la pagina vera todos los campos
getCampos().then(array_campos => {
    array_campos.forEach(campo => {
        
        const camposContainer = document.querySelector(".campos-container"); 
        camposContainer.appendChild(cartaCampo(campo.id,campo.nombre, campo.precio_hora, campo.disponible))
    });    
})



const select = document.querySelector("select"); 
const campos_deportivos_container = document.querySelector(".campos-container"); 


// evento al select para filtrar en funcion de la modalidad
select.addEventListener("change", (ev) => {

    campos_deportivos_container.innerHTML = ""; 

    getCamposByModalidadId(ev.target.value).then(info =>{
        info.campos_modalidad.forEach(campo => {
            campos_deportivos_container.appendChild(cartaCampo(campo.id,campo.nombre, campo.precio_hora, campo.disponible)); 
            
        });        
        
        
    })
    
})




