/**
 * Obtener las reservas de un usuario
 * @returns 
 */
export async function getReservasByUserId() {
    const response = await fetch('/TFG/reservasUsuario'); 
    return await response.json(); 
}

/**
 * Obtener lista de reservas
 * @returns 
 */
export async function getReservas() {
    try {
        const response = await fetch('/TFG/reservas');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}