
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

export async function userInfo() {
    try {
        const response = await fetch('/TFG/userInfo'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}