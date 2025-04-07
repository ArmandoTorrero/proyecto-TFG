import Validador from "./components/validador";

function validarInput(input,span,button,regex) {
    let inputsValidados = 0; 

    input.addEventListener("input", () => {
        if (regex.test(input.value)) {
            input.style.borderColor = "green"; 
            span.style.opacity = 0; 
            (inputsValidados == 0 || inputsValidados == 1) ? inputsValidados++ : ''
            if (inputsValidados == 2) {
                button.disabled = false; 
                button.classList.remove("disabled")
            }
            console.log(inputsValidados);
            
        }else{
            input.style.borderColor = "red"; 
            span.style.opacity = 1; 
            inputsValidados == 0 ? inputsValidados = 0 : inputsValidados--; 
            button.classList.add("disabled")
    
            console.log(inputsValidados);
            
        }
    })
    
}


document.addEventListener("DOMContentLoaded", ()=>{
    const buttonSubmit = document.querySelector(".enviar");

    // validar el email 
    const inputEmail = document.getElementById("correo")
    const spanEmail = document.querySelector(".emailSpan")
    let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; 

    validarInput(inputEmail,spanEmail,buttonSubmit,emailRegex)


    // validar contraseña
    const inputPasswd = document.getElementById("passwd")
    const spanPasswd = document.querySelector(".passwdSpan")
    let passwdRegex = /^.{5,}$/; 

    validarInput(inputPasswd,spanPasswd,buttonSubmit,passwdRegex); 
})






