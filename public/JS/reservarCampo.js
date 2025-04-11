import { crearBtnHora } from "./components/crearBotonHora";
import { crearOption } from "./components/crearOption";
import { quitarHorarios } from "./components/quitarHoras";


// funcion asincrona para conseguir el nombre del campo
async function getNombreCampo() {
    const response = await fetch('/TFG/nombreCampo');
    const data = await response.json(); 
    return data
}

// funcion para conseguir las fechas actualizadas de un campo y poder mostrarlas en el 'select' mediante los 'options'
async function getFechas() {
    const response = await fetch('/TFG/fechasCampo'); 
    const data = await response.json(); 
    return data; 
}

async function horariosDinamicos(value) {
    const datos = {
        fecha: value 
    }; 

    try {
        const response = await fetch('/TFG/horariosDinamicos', {
            method: 'POST', 
            headers: {
                'Content-type':'application/JSON'
            }, 
            body: JSON.stringify(datos)
        }); 

        const data = await response.json()
        return data; 
                 

    } catch (error) {
        console.error('Error al enviar los datos: ' , error);
        
    }
}



function cambiarSelect() {


    let select = document.getElementById("fecha")
    
    getFechas().then(fechas => {
        let array_fechas = fechas.fechas;
        let array_fechas_formateado = [];   
        
        // creamos un array para meter todas las fechas incluso los repetidos 
        array_fechas.forEach(fecha => {            
            array_fechas_formateado.push(fecha.fecha)
        });
        
        // creamos un array con las fechas sin repetir
        let fechas_unicas = [...new Set(array_fechas_formateado)];

        // con la opcion 'crearOption()' creamos un option para el select, por cada fecha unica creamos un option para el select 
        fechas_unicas.forEach(fecha => {
            select.appendChild(crearOption(fecha,fecha))
        });

        // recogemos la seccion de horarios
        const horariosSection = document.getElementById("horarios"); 
        
        // le añadimos un evento al select 
        select.addEventListener("change", (ev) => {

            // cuandno se seleccione un option se mostraran los horarios de la fecha seleccionada 
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