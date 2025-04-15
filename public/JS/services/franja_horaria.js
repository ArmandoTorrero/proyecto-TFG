/**
 * Funcion para devolver las fechas de un campo determinado
 * @returns 
 */
export async function getFechas() {
    const response = await fetch('/TFG/fechasCampo'); 
    const data = await response.json(); 
    return data; 
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
 * Funcion para conseguir un horario determinado
 * @returns 
 */
export async function getHorarioInfo() {
    
    try {
        const response = await fetch('/TFG/horarioInfo'); 
        const data = await response.json(); 
        return data; 
    } catch (error) {
        console.log(error);
    }
    
}