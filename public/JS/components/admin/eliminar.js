import { eliminarUsuario } from "./../../services/usuario";
import { eliminarCampo } from "./../../services/campo";

/**
 * Función para eliminar usuario
 * @returns 
 */
export function deleteUser() {

    const tabla_campos_container = document.querySelector(".user-info-container");

    if (!tabla_campos_container) {
        console.error("No se encontró el contenedor de información de usuarios.");
        return;
    }

    // Asignar eventos a los botones de eliminar
    const botonesEliminar = tabla_campos_container.querySelectorAll(".acciones-container .btn-danger");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            const fila = event.target.closest("tr"); // Encuentra la fila más cercana al botón
            if (!fila) {
                console.error("No se encontró la fila correspondiente al botón de eliminar.");
                return;
            }

            const id = fila.querySelector("td").textContent; // Obtiene el ID del usuario
            if (!id) {
                console.error("No se encontró el ID del usuario en la fila.");
                return;
            }

            Swal.fire({
                title: "¿Estás seguro de que quieres eliminar este usuario?",
                text: "No podrás revertirlo.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar"
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarUsuario(id).then(info => {
                        console.log(info);
                        if (info.exito) {
                            fila.remove(); // Elimina la fila de la tabla
                            Swal.fire("¡Usuario eliminado!", "El usuario ha sido eliminado.", "success");
                        } else {
                            Swal.fire("Error", "No se pudo eliminar el usuario.", "error");
                        }
                    });
                }
            });
        });
    });
}

export function deleteCampo() {
    const tabla_campos_container = document.querySelector(".campos-container");

    if (!tabla_campos_container) {
        console.error("No se encontró el contenedor de información de campos.");
        return;
    }

    // Asignar eventos a los botones de eliminar
    const botonesEliminar = tabla_campos_container.querySelectorAll(".acciones-container .btn-danger");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            const fila = event.target.closest("tr"); // Encuentra la fila más cercana al botón
            if (!fila) {
                console.error("No se encontró la fila correspondiente al botón de eliminar.");
                return;
            }

            const id = fila.querySelector("td").textContent; // Obtiene el ID del usuario
            if (!id) {
                console.error("No se encontró el ID del campo en la fila.");
                return;
            }

            Swal.fire({
                title: "¿Estás seguro de que quieres eliminar este campo?",
                text: "No podrás revertirlo.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar"
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarCampo(id).then(info => {
                        console.log(info);
                        if (info.exito) {
                            fila.remove(); // Elimina la fila de la tabla
                            Swal.fire("Campo eliminado!", info.mensaje, "success");
                        } else {
                            Swal.fire("Error", info.mensaje, "error");
                        }
                    });
                }
            });
        });
    });
    
}