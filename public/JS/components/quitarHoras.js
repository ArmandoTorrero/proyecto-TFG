export function quitarHorarios(horariosContainer) {
    horariosContainer.forEach(hora => {
        hora.style.display = "none"; 
    });    
}