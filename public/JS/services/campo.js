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
        const response = await fetch("/TFG/getCampos")
        const data = await response.json(); 
        
        return data.campos; 

    } catch (error) {
        console.error(error);
        
    }
}

/**
 * Funcion que devuelve una lista de campos segun su modalidad
 * @returns 
 */
export async function getCamposByModalidadId(modalidad_id) {

    const datos = {
        id: modalidad_id
    }    

    try {
        const respose = await fetch('/TFG/modalidadCampos', {
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
 * Conseguir el id de la modalidad que hay en la sesion
 * @returns 
 */
export async function getModalidadId() {
    const response = await fetch('/TFG/modalidadId');
    return await response.json();
}