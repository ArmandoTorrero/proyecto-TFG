import { crearBtnHora } from "./components/crearBotonHora";
import { crearOption } from "./components/crearOption";
import { getFechasActualizadas, horariosDinamicos } from "./services/franja_horaria";


/**
 * Funcion para que aparezcan los horarios segun la fecha seleccionada
 */
function cambiarSelect() {


    let select = document.getElementById("fecha")
    
    getFechasActualizadas().then(fechas => {
        console.log(fechas);
        
        
        let array_fechas = fechas.fechas;
        let array_fechas_formateado = [];   
        
        // creamos un array para meter todas las fechas incluso las repetidas 
        array_fechas.forEach(fecha => {                        
            array_fechas_formateado.push(fecha.fecha)
        });
    
        // creamos un array con las fechas sin repetir
        let fechas_unicas = [...new Set(array_fechas_formateado)];

        // Convertir cada fecha a formato europeo
        let fechas_formato_europeo = fechas_unicas.map(fechaStr => {
            let fecha = new Date(fechaStr);
            let dia = String(fecha.getDate()).padStart(2, '0');
            let mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
            let año = fecha.getFullYear();
            return `${dia}-${mes}-${año}`;
        });

        
        // con la opcion 'crearOption()' por cada fecha unica creamos un option para el select 
        for (let i = 0; i < fechas_formato_europeo.length; i++) {
            select.appendChild(crearOption(fechas_formato_europeo[i], fechas_unicas[i]))
            
        }        

        // recogemos la seccion de horarios
        const horariosSection = document.getElementById("horarios"); 
        
        // le añadimos un evento al select 
        select.addEventListener("change", (ev) => {       
                
            // cuando se seleccione una fecha en el option se mostraran los horarios de la fecha seleccionada 
            horariosDinamicos(ev.target.value).then(info => {

                let horarios = info.horarios; // recogemos toda la informacion de esa fecha
                
                horariosSection.innerHTML = ''; // borramos los botones que haya anteriormente

                if (info.horarios.length != 0) {
                    // por cada hora creamos un boton
                    horarios.forEach(horario_info => {
                        horariosSection.appendChild(crearBtnHora(horario_info.id, horario_info.hora_inicio, horario_info.disponible))
                        
                    });
                }else{

                    // Si no hay horarios se lo indicamos al usuario mediante un texto 
                    let titulo = document.createElement("h2"); 
                    titulo.textContent = "No hay horarios para esta fecha";
                    titulo.style.color = "#fff";  
                    horariosSection.appendChild(titulo)
                    
                }
                
                
            })
        })
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
        
    cambiarSelect()

})