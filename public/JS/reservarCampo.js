import { crearBtnHora } from "./components/crearBotonHora";
import { crearOption } from "./components/crearOption";
import { getNombreCampo, getModalidadId } from "./services/campo";
import { getFechas, horariosDinamicos } from "./services/franja_horaria";



function cambiarSelect() {


    let select = document.getElementById("fecha")
    
    getFechas().then(fechas => {
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
                console.log(info);

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

/**
 * Funcion para cambiar la imagen del campo dependiendo de la modalidad
 * @param {*} element 
 */
function changeImgByModalidadId(element) {
    getModalidadId().then(info => {
        let id_modalidad = info.id_modalidad;

        // Cambiar la imagen según el id de modalidad
        
        switch (id_modalidad) {
            case 1:
                element.style.backgroundImage = "url('./PUBLIC/ASSETS/balon-futbol.jpeg')";
                break;
        
            default:
                break;
        }
        
    })
}



document.addEventListener("DOMContentLoaded", () => {
    
    // Introducir el titulo del campo en el h1
    getNombreCampo().then(nombreCampo => {
        let titulo = document.querySelector(".content > h1")
        titulo.textContent = nombreCampo.nombre
    })
    
    cambiarSelect()

    let img = document.querySelector(".reservar > .img");
    
    changeImgByModalidadId(img)
})