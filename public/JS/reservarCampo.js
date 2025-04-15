import { crearBtnHora } from "./components/crearBotonHora";
import { crearOption } from "./components/crearOption";
import { getNombreCampo } from "./services/campo";
import { getFechas, horariosDinamicos } from "./services/franja_horaria";



function cambiarSelect() {


    let select = document.getElementById("fecha")
    
    getFechas().then(fechas => {
        let array_fechas = fechas.fechas;
        let array_fechas_formateado = [];   
        
        // creamos un array para meter todas las fechas incluso las repetidas 
        array_fechas.forEach(fecha => {            
            array_fechas_formateado.push(fecha.fecha)
        });
        
        // creamos un array con las fechas sin repetir
        let fechas_unicas = [...new Set(array_fechas_formateado)];

        // con la opcion 'crearOption()' por cada fecha unica creamos un option para el select 
        fechas_unicas.forEach(fecha => {
            select.appendChild(crearOption(fecha,fecha))
        });

        // recogemos la seccion de horarios
        const horariosSection = document.getElementById("horarios"); 
        
        // le añadimos un evento al select 
        select.addEventListener("change", (ev) => {

            // cuando se seleccione una fecha en el option se mostraran los horarios de la fecha seleccionada 
            horariosDinamicos(ev.target.value).then(info => {

                let horarios = info.horarios; // recogemos toda la informacion de esa fecha
                
                horariosSection.innerHTML = ''; // borramos los botones que haya anteriormente

                // por cada hora creamos un boton
                horarios.forEach(horario_info => {
                    horariosSection.appendChild(crearBtnHora(horario_info.id, horario_info.hora_inicio, horario_info.disponible))
                    
                });
                
            })
        })
    })
}




document.addEventListener("DOMContentLoaded", () => {
    
    // Introducir el titulo del campo en el h1
    getNombreCampo().then(nombreCampo => {
        let titulo = document.querySelector(".content > h1")
        titulo.textContent = nombreCampo.nombre
    })
    
    cambiarSelect()
    
})