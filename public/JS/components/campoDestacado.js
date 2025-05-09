import { logueado } from "./../services/usuario";


/**
 * En la seccion de pistas destacadas usar los 3 primeros campos e ir cambiando su contenido
 * @param {*} id 
 * @param {*} nombreCampo 
 * @param {*} precio 
 * @param {*} categoria_id 
 * @param {*} h2 
 * @param {*} imgContainer 
 * @param {*} spanPrecio 
 * @param {*} enlace 
 * @param {*} categoriaParrafo 
 */
export function cartaCampoDestacado(id,nombreCampo,precio,categoria_id,h2,imgContainer,spanPrecio,enlace,categoriaParrafo) {
    h2.textContent = nombreCampo; 
    spanPrecio.textContent = `${precio}€`; 

    logueado().then(rol => {
        if (rol.rol != 2) {
            
            enlace.textContent = 'Ver detalles'; 
            enlace.href = `/TFG/reservarCampo?id_campo=${id}`; 
        }else{
            enlace.textContent = 'Editar'; 
            enlace.href = `/TFG/perfil`;
        }
        
    })

    switch (categoria_id) {
        case 1:
            imgContainer.style.backgroundImage = "url('./PUBLIC/ASSETS/campo-futbol4.jpeg')";
            categoriaParrafo.textContent = "Futbol"; 
            break;
        case 2: 
            imgContainer.style.backgroundImage = "url('./PUBLIC/ASSETS/tenis.jpeg')"; 
            categoriaParrafo.textContent = "Tenis"; 
            break; 
        case 3:
            imgContainer.style.backgroundImage = "url('./PUBLIC/ASSETS/padel.jpeg')"; 
            categoriaParrafo.textContent = "Padel"; 
        break; 
    
        default:
            break;
    }
}