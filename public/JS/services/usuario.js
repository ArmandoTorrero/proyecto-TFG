
/**
 *
 * Obtener el rol del usuario
 * @return {*} 
 */
export async function logueado () {
    try {
        let response = await fetch('/TFG/logueado'); 
        let data = await response.json(); 
        return data
        
    } catch (error) {
        console.error(error);
        
    }
}