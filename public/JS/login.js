
function validarInput(input,span,regex) {
    
        if (regex.test(input.value)) {
            input.style.borderColor = "green"; 
            span.style.opacity = 0; 
            return true; 
            
        }else{
            input.style.borderColor = "red"; 
            span.style.opacity = 1; 
            return false; 
            
        }
    
}

document.addEventListener("DOMContentLoaded", ()=>{
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
    let emailValidado = false; 
    let passwdValidada = false; 

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


    // evento para el submit del formulario
    const form = document.getElementById("miForm"); 
    form.addEventListener("submit", (ev) => {
        ev.preventDefault(); 

        const email = document.getElementById("correo").value;
        const passwd = document.getElementById("passwd").value;
        fetch("/TFG/validarLogin", {
            method: "POST", 
            body: JSON.stringify({
                correo: email,
                passwd: passwd
            })
        })
        .then(respuesta => respuesta.json())
        .then(result => {
            console.log(result);
            if (result.existe == true) {
                let alert = document.getElementById("alerta-verde")
                alert.style.top = "5%"; 
                
                setTimeout(() => {
                     window.location.href = "/TFG/perfil"; 
                }, 1000);
                
            }else{
                let alert = document.getElementById("alerta-roja")
                alert.style.top = "5%"; 
                setTimeout(() => {
                    alert.style.top = "-10%"; 
                }, 1000);
            }
            
        })
        .catch(error => {
            console.error("Error:", error);
        })
    })    

})






