import Validador from "./components/validador";


const checboxMilitar = document.getElementById("checkbox-militar");
const inputMilitar = document.getElementById("input-militar");

// comprobar si el checkbox esta cheked para mostrar el input

checboxMilitar.addEventListener("change", () => {
    checboxMilitar.checked ? inputMilitar.style.opacity = 1 : inputMilitar.style.opacity = 0;
});

// Contador para comprobar si todos los inputs estan validados
let inputsValidados = 0; 

// const buttonSubmit = document.querySelector(".enviar");
// const inputUsername = document.getElementById("username");
// const userSpan = document.querySelector(".userSpan")

// Expresión regular para validar el nombre de usuario (ejemplo: solo letras y números, entre 3 y 15 caracteres)
const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;

let validador = new Validador(buttonSubmit); 

validador.validarInput(validador.selectInput('username'), usernameRegex ,validador.selectSpan('.userSpan'))

















