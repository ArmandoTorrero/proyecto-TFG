/**
 *
 * Obtener el rol del usuario
 * @return {*} 
 */
export async function logueado () {
    try {
        const response = await fetch('/TFG/logueado'); 
        return await response.json(); 
        
    } catch (error) {
        console.error(error);
        
    }
}

/**
 * Obtener informacion del usuario
 * @returns 
 */
export async function userInfo() {
    try {
        const response = await fetch('/TFG/userInfo'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}

/**
 * Obtener lista de usuarios
 * @returns 
 */
export async function getUsuarios() {
    try {
        const response = await fetch('/TFG/usuarios');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

/**
 * Obtener el usuario a partir de un id
 * @param {*} id 
 * @returns 
 */
export async function userInfoBySendingId(id) {
    try {
        const response = await fetch('/TFG/userInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_usuario: id })
        }); 
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


/**
 * Función para eliminar un usuario
 * @param {*} id 
 * @returns 
 */
export async function eliminarUsuario(id) {
    try {
        const response = await fetch('/TFG/eliminarUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_usuario: id })
        })

        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}

export async function buscarUsuario(username) {
    try {
        const response = await fetch('/TFG/buscarUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario: username })
        })

        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}
