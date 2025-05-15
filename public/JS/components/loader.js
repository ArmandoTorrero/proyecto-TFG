
/**
 * Función para cargar el loader
 */
export function cargarLoader() {
    let loader_container = document.querySelector(".loader-container");
    let loader = loader_container.querySelector(".loader"); 
    loader.style.position = "relative"; 
    loader.style.top = "50%"; 
    loader.style.left = "50%";  
    loader_container.style.display = "block"; 
    document.body.style.overflowY = "hidden"; 

    setTimeout(() => {
        loader_container.style.display = "none"; 
        document.body.style.overflowY = "auto";
    }, 2000);
    
}