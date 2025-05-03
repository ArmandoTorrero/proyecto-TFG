/**
 * Funcion que devuelve el nombre del campo
 * @returns 
 */
export async function getNombreCampo() {
    try {
        const response = await fetch('/TFG/nombreCampo');
        return await response.json(); 
        
    } catch (error) {
        console.log(error);
        
    }
}

/**
 * Funcion que devuelve el precio/hora de un campo
 * @returns 
 */
export async function getPrecioHora(){
    try {
        const response = await fetch('/TFG/precioCampo'); 
        return await response.json();
    } catch (error) {
        console.log(error);
        
    } 
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
 * Funcion que devuelve la informacion de un campo a partir de un id
 * @param {*} campo_id 
 * @returns 
 */
export async function getCampoById(campo_id) {

    const datos = {
        id_campo: campo_id
    }

    try {
        const respose = await fetch('/TFG/getCampoById', {
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
 * Funcion que elimina un campo a partir de un id
 * @param {*} campo_id 
 * @returns 
 */
export async function eliminarCampo(campo_id) {

    const datos = {
        id_campo: campo_id
    }

    try {
        const respose = await fetch('/TFG/eliminarCampo', {
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
    try {
        const response = await fetch('/TFG/modalidadId');
        return await response.json();
    } catch (error) {
        console.log(error);
        
    }
}


/**
 * Conseguir la modalidad de un campo a partir de la sesion creada al entrar a los campos de la pagina de 'modalidades'
 * @returns 
 */
export async function modalidad() {
    try {
        const response = await fetch("/TFG/modalidad"); 
        return await response.json();  
    } catch (error) {
        console.log(error);
        
    }       
}