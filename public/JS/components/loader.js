/**
 * Función para cargar el loader
 */
export function cargarLoader() {

    
    // Hacer scroll hacia arriba para que el usuario siempre vea el loader al recargar
    if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
    }

    let loader_container = document.querySelector(".loader-container");
    let loader = loader_container.querySelector(".loader"); 
    loader.style.position = "relative"; 
    loader.style.top = "50%"; 
    loader.style.left = "50%";  
    loader_container.style.display = "block"; 
    document.body.classList.add('noScroll')

    setTimeout(() => {
        loader_container.style.display = "none"; 
        document.body.classList.remove('noScroll');
    }, 2000);
    
}