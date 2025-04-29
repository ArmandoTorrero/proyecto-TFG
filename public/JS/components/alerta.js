
/**
 * Función para mostrar una alerta en la parte superior de la pantalla
 * @param {*} mensaje 
 * @param {*} alerta 
 */
export function alerta(mensaje, alerta) {
    alerta.textContent = mensaje; // mostramos el mensaje de exito
    alerta.style.top = "5%"; // mostramos la alerta
    setTimeout(() => {
        alerta.style.top = "-10%";
    }, 1000); // ocultamos la alerta tras 1 segundo
}