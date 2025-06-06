import { crearInput } from "./form_elements.js";
import { buscarUsuario } from "./../services/usuario.js";
import { crearTabla } from "./tabla.js";
import { editUser } from "./admin/editar.js";
import { deleteUser } from "./admin/eliminar.js";
import { accionesContainer } from "./boton.js";

/**
 * Función para crear un buscador de usuarios
 * @returns HTMLInputElement
 */
export function buscadorUsuario() {
    let input = crearInput('palabta', 'text', ""); 
    input.placeholder = "Buscar usuario"; 
    input.classList.add("buscador"); 

    
    input.addEventListener("input", (ev) => {
        buscarUsuario(ev.target.value.toLowerCase()).then(user => {            
        
            // Capturar el contenedor .user-info-container
            const userInfoContainer = document.querySelector(".user-info-container");

            if (!userInfoContainer) {
                console.error("No se encontró el contenedor .user-info-container.");
                return;
            }

            // Eliminar solo la tabla existente si la hay
            const existingTable = userInfoContainer.querySelector("table");
            if (existingTable) {
                existingTable.remove();
            }

            let headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Acciones'];
            // Crear una nueva tabla si hay usuarios
            if (user.usuario && user.usuario.length > 0) {
                let data = user.usuario.map(usuario => [
                    usuario.id,
                    usuario.nombre,
                    usuario.email,
                    usuario.tlf,
                    accionesContainer() // Usar accionesContainer como último parámetro
                ]);

                let tabla_usuarios = crearTabla(headers, data);
                userInfoContainer.appendChild(tabla_usuarios);

                // Llamar a las funciones editUser y deleteUser después de añadir la tabla
                editUser();
                deleteUser();
            }else{
                userInfoContainer.appendChild(crearTabla(headers, []));
                userInfoContainer.querySelector("table").textContent = "No existe";                      
            }
        });
    });

    return input; 
}

