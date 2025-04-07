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
            input.dataset.validado = "true";  
        } else {
            input.style.borderColor = "red";
            span.style.opacity = 1
            this.btn.disabled = true;
            this.btn.classList.add("disabled");
            input.dataset.validado = "false"; 
        }
    
        this.comprobarInputs(); 
    }
    
    comprobarInputs(checkboxMarcado = false) {
        const inputs = document.querySelectorAll(".label-input input:not(#id_militar)");
        const inputMilitar = document.getElementById("id_militar");
        
        let todosValidos = true;
        
        // Verificar inputs regulares
        inputs.forEach(input => {
            if (input.dataset.validado !== "true") {
                todosValidos = false;
            }
        });
        
        // Si el checkbox está marcado, verificar también el input militar
        if (checkboxMarcado) {
            if (inputMilitar.dataset.validado !== "true") {
                todosValidos = false;
            }
        }
        
        if (todosValidos) {            
            this.btn.disabled = false;
            this.btn.classList.remove("disabled");
            return true;
        } else {
            this.btn.disabled = true;
            this.btn.classList.add("disabled");
            return false; 
        }
    }

}

export default Validador; 