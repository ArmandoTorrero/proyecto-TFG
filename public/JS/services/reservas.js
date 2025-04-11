
/**
 * Obtener las reservas de un usuario
 * @returns 
 */
export async function getReservasByUserId() {
    const response = await fetch('/TFG/reservasUsuario'); 
    return await response.json(); 
}