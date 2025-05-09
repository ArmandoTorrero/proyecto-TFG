/**
 * Funcion que muestra al usuario la informacion de la reserva que va a hacer 
 * @param {*} nombreCampo 
 * @param {*} fecha 
 * @param {*} hora 
 * @param {*} precio 
 */
export function info(nombreCampo, fecha, hora, precio) {
    let titulo = document.querySelector(".nombreCampo"); 
    let p_fecha = document.querySelector("section.info > .fecha");
    let p_hora = document.querySelector("section.info > .hora_inicio");
    let p_precio = document.querySelector("section.info > .precio");

    // Convertir la fecha de formato yy-mm-dd a dd-mm-yy
    const [year, month, day] = fecha.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    titulo.textContent = `Campo: ${nombreCampo}`; 
    p_fecha.textContent = `Fecha: ${formattedDate}`; 
    p_hora.textContent = `Hora: ${hora}`; 
    p_precio.textContent = `Precio: ${precio}€`;
}