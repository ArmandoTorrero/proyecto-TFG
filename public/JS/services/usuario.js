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