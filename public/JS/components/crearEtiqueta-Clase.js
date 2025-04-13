export function CrearEtiquetaConClase(nombreEtiqueta,nombreClase) {
    let etiqueta = document.createElement(nombreEtiqueta); 
    etiqueta.classList.add(nombreClase)
    return etiqueta;  
    
}