import { crearBtnHora } from "./components/crearBotonHora";

// funcion asincrona para conseguir el horario de un campo
async function getHoras() {
    const response = await fetch('/TFG/horarios'); 
    const data = await response.json();     
    return data; 
    
}

// funcion asincrona para conseguir el nombre del campo
async function getNombreCampo() {
    const response = await fetch('/TFG/nombreCampo');
    const data = await response.json(); 
    return data
}


function cambiarSelect() {

    // funcion para conseguir las fechas de un campo y poder mostrarlas en el 'select' mediante los 'options'
    async function getFechas() {
        const response = await fetch('/TFG/fechasCampo'); 
        const data = await response.json(); 
        return data; 
    }

    let select = document.getElementById("fecha")

    getFechas().then(fechas => {
        let array_fechas = fechas.fechas;
        let array_fechas_formateado = [];   
        
        array_fechas.forEach(fecha => {            
            array_fechas_formateado.push(fecha.fecha)
        });
        
        let fechas_unicas = [...new Set(array_fechas_formateado)]; 
        console.log(fechas_unicas);
        
        
    })
}

cambiarSelect()



document.addEventListener("DOMContentLoaded", () => {

    // Introducir el titulo del campo en el h1
    getNombreCampo().then(nombreCampo => {
        let titulo = document.querySelector(".content > h1")
        titulo.textContent = nombreCampo.nombre
    })

    // crear un boton horario por cada franja_horaria que recibimos 
    getHoras().then(data => {
        
        const horariosSection = document.getElementsByClassName("horarios")[0]

        console.log(data);  
        
        data.forEach(horario_info => {
            horariosSection.appendChild(crearBtnHora(horario_info.id, horario_info.hora_inicio))      
        });
        
    })
})