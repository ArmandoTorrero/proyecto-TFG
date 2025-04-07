import Validador from "./components/validador";

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

    inputElement.addEventListener('input', () => {
        validador.validarInput(inputElement, array_regex[i], spanElement);
        validador.comprobarInputs(checboxMilitar.checked);
    });
}


const checboxMilitar = document.getElementById("checkbox-militar");
const contenedorInputMilitar = document.getElementById("input-militar")
const inputMilitar = document.getElementById("id_militar")
let regex_inpu_militar = /^\d{8}[A-Za-z]$/; 


// comprobar si el checkbox esta cheked para mostrar el input

checboxMilitar.addEventListener("change", () => {
    if (checboxMilitar.checked) {
        contenedorInputMilitar.style.opacity = 1;
        
        // Validar inmediatamente si ya hay un valor en el input militar
        if (inputMilitar.value) {
            if (regex_inpu_militar.test(inputMilitar.value)) {
                contenedorInputMilitar.style.borderColor = "green";
                contenedorInputMilitar.children[2].style.opacity = 0;
                inputMilitar.dataset.validado = "true";
            } else {
                contenedorInputMilitar.style.borderColor = "red";
                contenedorInputMilitar.children[2].style.opacity = 1;
                inputMilitar.dataset.validado = "false";
            }
            validador.comprobarInputs(true);
        } else {
            // Si no hay valor, marcar como no válido
            inputMilitar.dataset.validado = "false";
            validador.comprobarInputs(true);
        }

        inputMilitar.addEventListener("input", () => {
            if (regex_inpu_militar.test(inputMilitar.value)) {
                contenedorInputMilitar.style.borderColor = "green";
                contenedorInputMilitar.children[2].style.opacity = 0;
                inputMilitar.dataset.validado = "true";
            } else {
                contenedorInputMilitar.style.borderColor = "red";
                contenedorInputMilitar.children[2].style.opacity = 1;
                inputMilitar.dataset.validado = "false";
            }
            validador.comprobarInputs(true);
        });
    } else {
        contenedorInputMilitar.style.opacity = 0;
        validador.comprobarInputs(false);
    }
});




