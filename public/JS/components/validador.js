class Validador {

    constructor(btn){
        this.btn = btn;
    }
    
    selectInput(id_input){
        return document.getElementById(id_input); 
    }

    selectSpan(classSpan){
        return document.querySelector(classSpan); 
    }

    validarInput(input, regex, span) {
        if (regex.test(input.value)) {
            input.style.borderColor = "green";
            span.style.opacity = 0
            this.btn.disabled = false;
            this.btn.classList.remove("disabled");
            input.dataset.validado = "true";  // << NUEVO
        } else {
            input.style.borderColor = "red";
            span.style.opacity = 1
            this.btn.disabled = true;
            this.btn.classList.add("disabled");
            input.dataset.validado = "false"; // << NUEVO
        }
    
        this.comprobarInputs(); // << NUEVO
    }
    
    comprobarInputs() {
        const inputs = document.querySelectorAll(".label-input input:not(#id_militar)");
        let todosValidos = true;
    
        inputs.forEach(input => {
            if (input.dataset.validado !== "true") {
                todosValidos = false;
            }
        });
    
        if (todosValidos) {
            console.log("validos");
            
            this.btn.disabled = false;
            this.btn.classList.remove("disabled");
        } else {
            console.log("no validos");
            
            this.btn.disabled = true;
            this.btn.classList.add("disabled");
        }
    }
    
   
}

export default Validador; 