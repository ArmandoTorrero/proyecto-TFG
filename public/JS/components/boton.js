export function crearBoton(clase = 'btn') {
    let boton = document.createElement("button")
    boton.classList.add(clase)

    return boton; 
}