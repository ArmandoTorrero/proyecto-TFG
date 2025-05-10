
/**
 * Función para poder mostrar/ocultar la contraseña mediante un checkbox
 */
export function mostrarPasswd() {
    let input_mostrar_passwd = document.getElementById("mostrar_passwd"); 
    let input_passwd = document.getElementById("passwd");
    
    input_mostrar_passwd.addEventListener("input", (ev) => {
        input_mostrar_passwd.checked ? input_passwd.type = "text" : input_passwd.type = "password";  
        
    })
}