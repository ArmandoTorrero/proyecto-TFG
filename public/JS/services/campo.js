/**
 * Funcion que devuelve el nombre del campo
 * @returns 
 */
export async function getNombreCampo() {
    const response = await fetch('/TFG/nombreCampo');
    const data = await response.json(); 
    return data
}

/**
 * Funcion que devuelve el precio/hora de un campo
 * @returns 
 */
export async function getPrecioHora(){
    const response = await fetch('/TFG/precioCampo'); 
    return await response.json(); 
}


/**
 * Funcion que devuelve todos los campos de la BBDD
 * @returns 
 */
export async function getCampos() {
    
    try {
        let response = await fetch("/TFG/getCampos")
        let data = await response.json(); 
        
        return data.campos; 

    } catch (error) {
        console.error(error);
        
    }
}

/**
 * Funcion que devuelve una lista ed campos segun su modalidad
 * @returns 
 */
export async function getCamposByModalidadId() {
    try {
        const respose = await fetch('/TFG/modalidadCampos')
        return await respose.json(); 
    } catch (error) {
        console.log(error);
        
    }
}