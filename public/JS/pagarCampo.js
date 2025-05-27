import { info } from "./components/infoReserva.js";
import { logueado } from "./services/usuario.js";
import { validarInput } from "./login.js";
import { alerta } from "./components/alerta.js";
import { getCookie, setCookie } from "./components/cookies.js";


/**
 * Función para realizar una reserva
 */
function realizarReserva() {
    const form = document.querySelector("form");


    // evento para el formulario 
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('/TFG/pagarCampo', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.exito) {
                alerta(result.mensaje, document.getElementById("alerta-verde"));
                setTimeout(() => {
                    window.location.href = "/TFG/perfil";
                }, 1000);
            } else {
                alerta(result.mensaje, document.getElementById("alerta-roja"));
            }
        } catch (error) {
            console.error("Error al realizar la reserva:", error);
        }
    });
}

/**
 * Funcion para msotrar la informacion de la reserva que va a hacer el usuario
 * @returns 
 */
async function infoPistaHorario() {
    try {
        const response = await fetch('/TFG/getInfoPistaHorarioByIdHorario'); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}


document.addEventListener("DOMContentLoaded", () => {
    
    infoPistaHorario().then(response => {    
        console.log(response);
        let informacion = response.info;
        
        // si el campo no esta disponible hacemos la redireccion
        informacion.pista_disponible == 0 ? window.location.href = '/TFG/camposDeportivos': '';  
        info(informacion.nombre, informacion.fecha, informacion.hora_inicio.slice(0, -3), informacion.precio_hora); 
        
    });

    const buttonConfirmar = document.querySelector(".form-container .confirmar"); 
    const form = document.querySelector("form"); 
    
    logueado().then(rol => {

        

        if (rol.rol != 1) { // si el rol no es de un usuario corriente desabilitamos el formulario

            // Captamos el parametro get 
            const url = new URL(window.location.href);
            const id_horario = url.searchParams.get("id_horario");       

            if (rol.rol == false) { // si el usuario es invitado lo redirigimos a la pagina de login y creamos la cookie
                getCookie("cookies") == 'true' ? setCookie('id_horario', id_horario, {days: 1 , path: '/'}) : ''; 
                window.location.href = '/TFG/login';

            }else{ // si es admin lo redirigimos al perfil
                window.location.href = '/TFG/perfil';
            }

                
            buttonConfirmar.disabled = true;
            form.addEventListener("submit", (ev)=> {
                ev.preventDefault(); 

            })
        }else{
            realizarReserva(); 
        }
        
    })

    // iniciamos las variables para comprobar que los inputs estan validados
    let tarjetaValida = false; 
    let fechaCaducidadValida = false; 
    let cvcValido = false; 
    let titularValido = false; 
    
    function comprobarEstadoInputs() {
        let todoCorrecto = tarjetaValida && fechaCaducidadValida && cvcValido && titularValido;  
    
        // si todas las variables estan en 'true' se activa el boton y se cambia de color
        buttonConfirmar.disabled = !todoCorrecto
        buttonConfirmar.style.backgroundColor = todoCorrecto ? '#2462EB' : 'rgb(36, 98, 235, 0.5)'; 
    }

    comprobarEstadoInputs()
    
    // creamos un regex y recogemos el span y su input para poder validar los campos
    const inputTarjeta = document.getElementById("numTarjeta")
    const spanTarjeta = document.querySelector(".tarjetaSpan")
    let tarjetaRegex = /^\d{4} ?\d{4} ?\d{4} ?\d{1,7}$/; 
    
    inputTarjeta.addEventListener("input", () => {
        tarjetaValida = validarInput(inputTarjeta,spanTarjeta,tarjetaRegex)
        comprobarEstadoInputs()
    
    })
    
    
    const inputFechaCaducidad = document.getElementById("fechaExp")
    const spanFecha = document.querySelector(".fechaSpan")
    let fechaRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    // Validación adicional para el año
    function validarFechaExp(input, span) {
        const match = input.value.match(fechaRegex);
        if (match) {
            const inputYear = parseInt('20' + match[2], 10);
            const currentYear = new Date().getFullYear();
            if (inputYear >= currentYear) {
                input.style.borderColor = "green";
                input.style.boxShadow = "0 0 5px green";
                span.style.opacity = 0;
                return true;
            } else {
                input.style.borderColor = "red";
                input.style.boxShadow = "0 0 5px red";
                span.style.opacity = 1;
                return false;
            }
        } else {
            input.style.borderColor = "red";
            input.style.boxShadow = "0 0 5px red";
            span.style.opacity = 1;
            return false;
        }
    }

    inputFechaCaducidad.addEventListener("input", () => {
        fechaCaducidadValida = validarFechaExp(inputFechaCaducidad, spanFecha);
        comprobarEstadoInputs();
    })
    
    
    const inputCVC = document.getElementById("cvc")
    const spanCVC = document.querySelector(".cvcSpan")
    let cvcRegex = /^\d{3}$/
    
    inputCVC.addEventListener("input", () => {
        cvcValido = validarInput(inputCVC,spanCVC,cvcRegex)
        comprobarEstadoInputs()
    
    })
    
    
    const inputTitular = document.getElementById("titularTarjeta")
    const spanTitular = document.querySelector(".titularSpan")
    let titularRegex = /^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s]{2,50}$/i
    ; 
    
    inputTitular.addEventListener("input", () => {
        titularValido = validarInput(inputTitular,spanTitular,titularRegex)
        comprobarEstadoInputs()    
        
    })
})






