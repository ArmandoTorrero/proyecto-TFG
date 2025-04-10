export function crearOption(textContent,value) {
    let option = document.createElement("option"); 
    option.textContent = textContent; 
    option.value = value; 

    return option; 
}