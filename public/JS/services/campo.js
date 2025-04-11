// funcion asincrona para conseguir el nombre del campo
export async function getNombreCampo() {
    const response = await fetch('/TFG/nombreCampo');
    const data = await response.json(); 
    return data
}

export async function getPrecioHora(){
    const response = await fetch('/TFG/precioCampo'); 
    return await response.json(); 
}