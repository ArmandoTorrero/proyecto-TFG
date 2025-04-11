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

function info(nombreCampo,fecha,hora) {
    let titulo = document.querySelector(".nombreCampo"); 
    let p_fecha = document.querySelector("section.info > .fecha");
    let p_hora = document.querySelector("section.info > .hora_inicio"); 

    titulo.textContent = `Campo: ${nombreCampo}`; 
    p_fecha.textContent = `Fecha: ${fecha}`; 
    p_hora.textContent = `Hora: ${hora}`; 
}

async function getHorarioInfo() {
    
    try {
        const response = await fetch('/TFG/horarioInfo'); 
        const data = await response.json(); 
        return data; 
    } catch (error) {
        console.log(error);
    }
    
}

getHorarioInfo().then(horario => {
    let horarioInfo = horario.info
    
    info("galletas",horarioInfo.fecha,horarioInfo.hora_inicio)
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
let titularRegex = /^[a-z]{1}/; 

inputTitular.addEventListener("input", () => {
    titularValido = validarInput(inputTitular,spanTitular,titularRegex)
    comprobarEstadoInputs()    
    
})

