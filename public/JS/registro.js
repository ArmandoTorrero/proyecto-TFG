import Validador from "./components/validador";


const checboxMilitar = document.getElementById("checkbox-militar");
const inputMilitar = document.getElementById("input-militar")
// comprobar si el checkbox esta cheked para mostrar el input

checboxMilitar.addEventListener("change", () => {
    checboxMilitar.checked ? inputMilitar.style.opacity = 1 : inputMilitar.style.opacity = 0;
});


const buttonSubmit = document.querySelector(".enviar");

// array de expresiones regulares
let array_regex = [/^[a-zA-Z0-9]{3,15}$/, /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, /^.{5,}$/, /^\d{9}$/]

// instanciamos la clase validador
let validador = new Validador(buttonSubmit); 


let label_input_containers = document.querySelectorAll(".label-input"); 


for (let i = 0; i < label_input_containers.length-1; i++) {
    let label_input_container_hijos = label_input_containers[i].children;
    let id_input = label_input_container_hijos[1].id;
    let class_span = label_input_container_hijos[2].className;

    let inputElement = document.getElementById(id_input);
    let spanElement = document.querySelector(`.${class_span}`);

    // Evento 'change' o 'input' para validar cuando cambia
    inputElement.addEventListener('input', () => {
        validador.validarInput(inputElement, array_regex[i], spanElement);
    });

    
}


