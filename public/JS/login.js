import { alerta } from "./components/alerta";
import { mostrarPasswd } from "./components/mostrar_passwd";


export function validarInput(input,span,regex) { // funcion para validar el input
    if (regex.test(input.value)) {
        input.style.borderColor = "green"; 
        input.style.boxShadow = "0 0 5px green"; // Agregar box-shadow si coincide el regex
        span.style.opacity = 0; 
        return true; 
    } else {
        input.style.borderColor = "red"; 
        input.style.boxShadow = "0 0 5px red"; // Agregar box-shadow si no coincide el regex
        span.style.opacity = 1; 
        return false; 
    }
}

/**
 * Función para relaizar el inicio de sesión.
 */
function login() {
    const form = document.getElementById("miForm"); 
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault(); 

        const email = document.getElementById("correo").value;
        const passwd = document.getElementById("passwd").value;

        try {
            const respuesta = await fetch("/TFG/validarLogin", {
                method: "POST", 
                body: JSON.stringify({
                    correo: email,
                    passwd: passwd
                })
            });

            const result = await respuesta.json();

            if (result.existe) {
                let alerta_verde = document.getElementById("alerta-verde"); 
                alerta(result.mensaje, alerta_verde); 

                setTimeout(() => {
                    window.location.href = "/TFG/perfil"; 
                }, 1000);

            } else {
                let alerta_roja = document.getElementById("alerta-roja");
                alerta(result.mensaje, alerta_roja); 
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
}

document.addEventListener("DOMContentLoaded", ()=>{

    // al pulsar en el checkbox se muestra/oculta la contraseña
    mostrarPasswd();

    const buttonSubmit = document.querySelector(".enviar");    
    // recogemos el input y el span del email
    const inputEmail = document.getElementById("correo")
    const spanEmail = document.querySelector(".emailSpan")
    let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; 


    // recogemos el input y el span de la contraseña
    const inputPasswd = document.getElementById("passwd")
    const spanPasswd = document.querySelector(".passwdSpan")
    let passwdRegex = /^.{5,}$/; 


    // variables para comprobar si estan validados los inputs
    let emailValidado = validarInput(inputEmail,spanEmail,emailRegex); // Validar al cargar la página
    let passwdValidada = validarInput(inputPasswd,spanPasswd,passwdRegex); // Validar al cargar la página

    // Actualizar el estado del botón al cargar la página
    if (emailValidado && passwdValidada) {
        buttonSubmit.disabled = false; 
        buttonSubmit.classList.remove("disabled"); 
    } else {
        buttonSubmit.disabled = true; 
        buttonSubmit.classList.add("disabled");
    }

    // evento para el email para comprobar si esta validado y poder activar el boton 
    inputEmail.addEventListener("input", () => {
        emailValidado = validarInput(inputEmail,spanEmail,emailRegex); 
        
        if (emailValidado && passwdValidada) {
            buttonSubmit.disabled = false; 
            buttonSubmit.classList.remove("disabled"); 
        }else{
            buttonSubmit.disabled = true; 
            buttonSubmit.classList.add("disabled");
        }
    })

    // evento para el password  para comprobar si esta validado y poder activar el boton 
    inputPasswd.addEventListener("input", () => {
        passwdValidada = validarInput(inputPasswd,spanPasswd,passwdRegex);  
        
        if (emailValidado && passwdValidada) {
            buttonSubmit.disabled = false; 
            buttonSubmit.classList.remove("disabled"); 
        }else{
            buttonSubmit.disabled = true; 
            buttonSubmit.classList.add("disabled");
        }
    })


    login();     

})






