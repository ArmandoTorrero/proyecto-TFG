import { crearInput } from "./form_elements";
import { buscarUsuario } from "./../services/usuario";
import { crearTabla } from "./tabla";
import { editUser } from "./admin/editar";
import { deleteUser } from "./admin/eliminar";
import { accionesContainer } from "./boton";


export function buscadorUsuario() {
    let input = crearInput('palabta', 'text', ""); 
    input.placeholder = "Buscar usuario"; 
    input.classList.add("buscador"); 

    const content = document.querySelector(".content"); 

    input.addEventListener("input", (ev) => {
        buscarUsuario(ev.target.value).then(user => {
            // Eliminar solo la tabla existente si la hay
            const existingTable = content.querySelector("table");
            if (existingTable) {
                existingTable.remove();
            }

            // Crear una nueva tabla si hay usuarios
            if (user.usuario && user.usuario.length > 0) {
                let headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Acciones'];
                let data = user.usuario.map(usuario => [
                    usuario.id,
                    usuario.nombre,
                    usuario.email,
                    usuario.tlf,
                    accionesContainer() // Usar accionesContainer como último parámetro
                ]);

                let tabla_usuarios = crearTabla(headers, data);
                content.appendChild(tabla_usuarios);
            }
        });

        // Llamar a las funciones editUser y deleteUser
        editUser();
        deleteUser();
    });

    return input; 
}

