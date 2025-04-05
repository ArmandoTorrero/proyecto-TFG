const checboxMilitar = document.getElementById("checkbox-militar");
const inputMilitar = document.getElementById("input-militar");

checboxMilitar.addEventListener("change", () => {
    checboxMilitar.checked ? inputMilitar.style.opacity = 1 : inputMilitar.style.opacity = 0;
    
})






