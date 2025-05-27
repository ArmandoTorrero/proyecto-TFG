import { crearBtnHora } from "./components/crearBotonHora.js";
import { getFechasActualizadas, horariosDinamicos } from "./services/franja_horaria.js";

/**
 * Mostrar los horarios dependiendo de la fecha
 * @param {*} fecha 
 */
function mostararHorariosByFecha(fecha) {

    const horariosSection = document.getElementById("horarios"); 

    horariosDinamicos(fecha).then(info => {
        
        horariosSection.innerHTML = '';
        let array_horarios = info.horarios;          
        let noHorarios = document.querySelector('.noHorarios'); 

        if (array_horarios.length > 0) {
            noHorarios.style.opacity = 0;
            array_horarios.forEach(horario_info => {
                horariosSection.appendChild(crearBtnHora(horario_info.id, horario_info.hora_inicio, horario_info.disponible))
                    
            });
        }else{
            noHorarios.style.opacity = 1; 
        }
        
        
    })
}

/**
 * Función para conseguir la informacion del campo
 * @returns 
 */
async function infoCampo() {
    try {
        const response = await fetch('/TFG/infoCampo'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}



document.addEventListener("DOMContentLoaded", () => {

    getFechasActualizadas().then(fechas => {
         let array_fechas = fechas.fechas;
        let array_fechas_formateado = [];   
        
        // creamos un array para meter todas las fechas incluso las repetidas 
        array_fechas.forEach(fecha => {                        
            array_fechas_formateado.push(fecha.fecha)
        });
    
        // creamos un array con las fechas sin repetir
        let fechas_unicas = [...new Set(array_fechas_formateado)];

        
        flatpickr("#calendario", {
            dateFormat: "Y-m-d",
            enable: fechas_unicas  // Fechas coloreadas/habilitadas
        });
        
        
    })

    let input_date = document.getElementById("calendario"); 
    input_date.addEventListener("change", (ev)=> {
        mostararHorariosByFecha(ev.target.value)
    })

    infoCampo().then(info => {
        let titulo = document.querySelector(".content > h1"); 
        titulo.textContent = info.info.nombre

        let modalidad = info.info.modalidad_id; 
        let img = document.querySelector(".reservar > .img");
        
        switch (modalidad) {
            case 1:
                img.style.backgroundImage = "url('./PUBLIC/ASSETS/balon-futbol.jpeg')";
                break;
            
            case 2: 
            img.style.backgroundImage = "url('./PUBLIC/ASSETS/tenis.jpeg')";
                break;
                
            case 3: 
            img.style.backgroundImage = "url('./PUBLIC/ASSETS/padel.jpeg')";
                break; 
            default:
                break;
        }
        
        
    })
        
})