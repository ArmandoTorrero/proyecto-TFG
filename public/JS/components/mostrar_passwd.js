
/**
 * Función para poder mostrar/ocultar la contraseña mediante un checkbox
 */
export function mostrarPasswd() {
    // obtenemos el checkbox
    let checkbox_mostrar_passwd = document.getElementById("mostrar_passwd"); 
    let input_passwd = document.getElementById("passwd");
    
    checkbox_mostrar_passwd.addEventListener("input", (ev) => {
        checkbox_mostrar_passwd.checked ? input_passwd.type = "text" : input_passwd.type = "password";  
        
    })
}