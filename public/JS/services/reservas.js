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
/**
 * Funcion para eliminar una reserva 
 * @param {*} id_reserva 
 * @param {*} id_horario 
 * @returns 
 */
export async function eliminarReserva(id_reserva, id_horario) {
    try {
        const response = await fetch('/TFG/eliminarReserva', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                reserva_id: id_reserva, 
                horario_id: id_horario 
            })
        });
        return await response.json();  
    } catch (error) {
        console.log(error);
        
    }
}