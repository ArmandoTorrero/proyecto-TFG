import { getHorarioInfo } from "./services/franja_horaria";
import { getNombreCampo, getPrecioHora } from "./services/campo";
import { info } from "./components/infoReserva";

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


getHorarioInfo().then(horario => {
    let horarioInfo = horario.info

    getNombreCampo().then(nombreCampo => {

        getPrecioHora().then(precio => {
            info(nombreCampo.nombre,horarioInfo.fecha,horarioInfo.hora_inicio,precio[0])

        })

    })
    
})

const buttonConfirmar = document.querySelector(".form-container .confirmar")

let tarjetaValida = false; 
let fechaCaducidadValida = false; 
let cvcValido = false; 
let titularValido = false; 

function comprobarEstadoInputs() {
    let todoCorrecto = tarjetaValida && fechaCaducidadValida && cvcValido && titularValido;  

    buttonConfirmar.disabled = !todoCorrecto
    buttonConfirmar.style.backgroundColor = todoCorrecto ? '#2462EB' : 'rgb(36, 98, 235, 0.5)'; 

}
comprobarEstadoInputs()

const inputTarjeta = document.getElementById("numTarjeta")
const spanTarjeta = document.querySelector(".tarjetaSpan")
let tarjetaRegex = /^\d{4} ?\d{4} ?\d{4} ?\d{1,7}$/; 

inputTarjeta.addEventListener("input", () => {
    tarjetaValida = validarInput(inputTarjeta,spanTarjeta,tarjetaRegex)
    comprobarEstadoInputs()

})


const inputFechaCaducidad = document.getElementById("fechaExp")
const spanFecha = document.querySelector(".fechaSpan")
let fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; 

inputFechaCaducidad.addEventListener("input", () => {
    fechaCaducidadValida = validarInput(inputFechaCaducidad,spanFecha,fechaRegex)
    comprobarEstadoInputs()

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

