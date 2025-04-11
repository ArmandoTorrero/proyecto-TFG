export function info(nombreCampo,fecha,hora,precio) {
    let titulo = document.querySelector(".nombreCampo"); 
    let p_fecha = document.querySelector("section.info > .fecha");
    let p_hora = document.querySelector("section.info > .hora_inicio");
    let p_precio = document.querySelector("section.info > .precio");
     

    titulo.textContent = `Campo: ${nombreCampo}`; 
    p_fecha.textContent = `Fecha: ${fecha}`; 
    p_hora.textContent = `Hora: ${hora}`; 
    p_precio.textContent = `Precio: ${precio}€`
}