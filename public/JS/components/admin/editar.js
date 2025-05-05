import { containerFormUser, containerFormCampo, containerFormHorario } from "./../boton";

/**
 * Función para editar usuario
 * @returns 
 */
export function editUser() {
        const userInfoContainer = document.querySelector(".user-info-container");
    
        if (!userInfoContainer) {
            console.error("No se encontró el contenedor de información de usuarios.");
            return;
        }
    
        // Asignar eventos a los botones de editar
        const botonesEditar = userInfoContainer.querySelectorAll(".acciones-container .btn-success");
        botonesEditar.forEach(boton => {
            boton.addEventListener("click", (event) => {

                document.body.style.overflowY = "hidden"; // cuando se haga click evitamos el scroll

                const fila = event.target.closest("tr"); // Encuentra la fila más cercana al botón
                if (!fila) {
                    console.error("No se encontró la fila correspondiente al botón de editar.");
                    return;
                }
    
                const id = fila.querySelector("td").textContent; // Obtiene el ID del usuario
                if (!id) {
                    console.error("No se encontró el ID del usuario en la fila.");
                    return;
                }
    
                containerFormUser(id); // Llama a la función para mostrar el formulario de edición
            });
        });
}


export function editarCampo() {

    //recogemos la seccion del contenido de los campos el cual incluye la tabla
    const tabla_campos_container = document.querySelector(".campos-container"); 

    if (!tabla_campos_container) {
        console.error("No se encontró el contenedor de información de campos.");
        return;
    }

    // recogemos los botones de edición de la tabla. 
    const botonesEditar = tabla_campos_container.querySelectorAll(".acciones-container .btn-success");
    botonesEditar.forEach(boton => {
        boton.addEventListener("click", (event) => {

            document.body.style.overflowY = "hidden"; // cuando se haga click evitamos el scroll

            const fila = event.target.closest("tr"); // Encuentra la fila más cercana al botón
            if (!fila) {
                console.error("No se encontró la fila correspondiente al botón de editar.");
                return;
            }

            const id = fila.querySelector("td").textContent; // Obtiene el ID del usuario
            if (!id) {
                console.error("No se encontró el ID del usuario en la fila.");
                return;
            }

            containerFormCampo(id); 
        });

    })    
}

export function editarHorario() {
    
    const tablaHorariosContainer = document.querySelector(".horarios_container"); 

    if (!tablaHorariosContainer) {
        console.error("No se encontró el contenedor de información de campos.");
        return;
    }

    // recogemos los botones de edición de la tabla. 
    const botonesEditar = tablaHorariosContainer.querySelectorAll(".acciones-container .btn-success"); 
    botonesEditar.forEach(boton => {
        boton.addEventListener("click", (event) => {


            const fila = event.target.closest("tr"); // Encuentra la fila más cercana al botón
            if (!fila) {
                console.error("No se encontró la fila correspondiente al botón de editar.");
                return;
            }

            

            const id = fila.querySelector("td").textContent; // Obtiene el ID del usuario
            const nombre_campo = fila.querySelector("td:nth-of-type(5)").textContent;  
            
            if (!id) {
                console.error("No se encontró el ID del usuario en la fila.");
                return;
            }

            containerFormHorario(id, nombre_campo); 
        });
    })
    
}