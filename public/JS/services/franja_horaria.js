
/**
 * Función que devuelve todos los registros de franja_horaria
 * @returns 
 */
export async function getAll() {
    try {
        const response = await fetch('/TFG/getHorarios'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
    } 
}


/**
 * Funcion para devolver las fechas actualizadas de un campo determinado
 * @returns 
 */
export async function getFechasActualizadas() {
    try {
        const response = await fetch('/TFG/fechasCampo'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    } 
}


/**
 * Funcion para que a partir de una fecha se devuelvan las horas que pertenecen a esa fecha
 * @param {*} value 
 * @returns 
 */
export async function horariosDinamicos(value) {
    
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


/**
 * Funcion para conseguir la informacion de un horario determinado
 * @returns 
 */
export async function getHorarioInfo() {
    
    try {
        const response = await fetch('/TFG/horarioInfo'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
    }
}


export async function getHorarioById(horario_id) {

    const datos = {
        id_horario: horario_id
    }

    try {
        const respose = await fetch('/TFG/getHorarioById', {
            method: "POST",
            headers: {
                'Content-type':'application/JSON'
            },
            body: JSON.stringify(datos)
        })

        return await respose.json(); 
    } catch (error) {
        console.log("Error al enviar los datos", error);
        
    }
}


/**
 * Función para eliminar un horario
 * @param {*} horario_id 
 * @returns 
 */
export async function eliminarHorario(horario_id) {
    const datos = {
        id_horario: horario_id
    }

    try {
        const respose = await fetch('/TFG/eliminarHorario', {
            method: "POST",
            headers: {
                'Content-type':'application/JSON'
            },
            body: JSON.stringify(datos)
        })

        return await respose.json(); 
    } catch (error) {
        console.log("Error al enviar los datos", error);
        
    }
}