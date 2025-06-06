import { logueado } from "./../services/usuario.js";
import { CrearEtiquetaConClase } from "./crearEtiqueta-Clase.js";


/**
 * Funcion para crear una carta de un campo destacado
 * @param {*} id_campo 
 * @param {*} nombre 
 * @param {*} precio 
 * @param {*} categoria_id 
 * @param {*} disponible 
 * @returns 
 */
export function cardCampoDestacado(id_campo,nombre,precio,categoria_id, disponible){
    
    let card_pista = CrearEtiquetaConClase('article', 'pista'); 

    // Creamos la seccion para la imagen, otra para el contenido de la carta y otra para la categoria
    let article_img = CrearEtiquetaConClase('article', 'img');
    let section_content = CrearEtiquetaConClase('section', 'content');
    let categoria = CrearEtiquetaConClase('p', 'categoria');

    // Creamos el contenido de la carte
    let nombre_campo = CrearEtiquetaConClase('h2', 'nombre_campo');
    nombre_campo.textContent = nombre;
    let precio_button = CrearEtiquetaConClase('article', 'precio-button');

    // Añadimos el precio y el boton junto con el enlace
    let precio_span = CrearEtiquetaConClase('span', 'precio');   
    precio_span.textContent = `${precio}€`;

    let button = CrearEtiquetaConClase('button', 'ver-detalles');
    let enlace = CrearEtiquetaConClase('a', 'enlace');
    enlace.target = "_self";

    logueado().then(rol => {
        if (rol.rol != 2) {

            if (disponible == 1) {
                enlace.textContent = 'Ver detalles'; 
                enlace.href = `/TFG/reservarCampo?id_campo=${id_campo}`; 
            }else {
                enlace.textContent = 'No disponible'; 
                enlace.addEventListener('click', (ev) => {
                    ev.preventDefault(); 
                })
            }
        }else{
            enlace.textContent = 'Editar'; 
            enlace.href = `/TFG/perfil`;
        }
        
    })

    switch (categoria_id) {
        case 1:
            categoria.textContent = "Futsal"; 
            break;
        case 2: 
            categoria.textContent = "Tenis"; 
            break; 
        case 3:
            categoria.textContent = "Padel"; 
        break; 
    
        default:
            break;
    }


    button.appendChild(enlace);

    precio_button.appendChild(precio_span);
    precio_button.appendChild(button);

    section_content.appendChild(nombre_campo);
    section_content.appendChild(precio_button);

    card_pista.append(article_img, section_content, categoria)

    return card_pista;

}