import Validador from "./components/validador";

const buttonSubmit = document.querySelector(".enviar");

// array de expresiones regulares
let array_regex = [/^[a-zA-Z0-9]{3,15}$/, /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, /^.{5,}$/, /^\d{9}$/]

// instanciamos la clase validador
let validador = new Validador(buttonSubmit); 


let label_input_containers = document.querySelectorAll(".label-input"); 


// bucle para añdair evento a los 4 primeros inputs
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

//comprobar el input para los militares, y hacer que si todos los inputs del formulario estan correctos se envie el formulario

const checboxMilitar = document.getElementById("checkbox-militar");
const contenedorInputMilitar = document.getElementById("input-militar")
const inputMilitar = document.getElementById("id_militar")
let regex_inpu_militar = /^\d{8}[A-Za-z]$/; 


// comprobar si el checkbox esta cheked para mostrar el input

checboxMilitar.addEventListener("change", () => {

    if (checboxMilitar.checked) {
        contenedorInputMilitar.style.opacity = 1; 

        if (buttonSubmit.disabled == false ) {
            buttonSubmit.disabled = true
            buttonSubmit.classList.add("disabled")            
        }

        inputMilitar.addEventListener("input", () =>{
            if (regex_inpu_militar.test(inputMilitar.value)) {
                console.log("si");
                label_input_containers[label_input_containers.length-1].style.borderColor = "green"; 
                
                
            }else{
                console.log("no");
                
            }
        })
        
        

        
        inputMilitar.addEventListener("input", () =>{
             if (regex_inpu_militar.test(inputMilitar.value)) {
                 contenedorInputMilitar.style.borderColor = "green"
                
                if (validador.comprobarInputs() && buttonSubmit.disabled == true) {
                     buttonSubmit.disabled = false; 
                    buttonSubmit.classList.remove("disabled")
                 }

             }else{
                 contenedorInputMilitar.style.borderColor = "red"
             }
         })
        
    }else if (checboxMilitar.checked == false && validador.comprobarInputs()) {
        contenedorInputMilitar.style.opacity = 0; 
        buttonSubmit.disabled = false; 
        buttonSubmit.classList.contains("disabled") ? buttonSubmit.classList.remove("disabled") : ''; 

    }else{
        contenedorInputMilitar.style.opacity = 0;
    }
});




