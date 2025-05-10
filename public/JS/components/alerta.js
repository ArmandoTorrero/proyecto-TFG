
/**
 * Función para mostrar una alerta en la parte superior de la pantalla
 * @param {*} mensaje 
 * @param {*} alerta 
 */
export function alerta(mensaje, alerta) {
    alerta.textContent = mensaje; // mostramos el mensaje de exito
    alerta.style.top = "15%"; // mostramos la alerta
    alerta.style.left = "50%"; 
    setTimeout(() => {
        alerta.style.top = "-10%";
    }, 2000); // ocultamos la alerta tras 2 segundos
}