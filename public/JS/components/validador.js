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

    validarInput(input,regex,span) {

        input.addEventListener("change", () => {
            
            if (regex.test(input.value)) {
                input.style.borderColor = "green"; 
                this.btn.disabled = false; 
                this.btn.classList.remove("disabled"); 
                span.style.opacity = 0; 
                return 1; 
            }else{
                input.style.borderColor = "red";
                this.btn.disabled = true; 
                this.btn.classList.add("disabled");
                span.style.opacity = 1; 
                return -1; 
                 
            }
            
        });
    }
   
}

export default Validador; 