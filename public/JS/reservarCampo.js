import { crearBoton } from "./components/boton";


async function getHoras() {
    const response = await fetch('/TFG/horarios'); 
    const horas = await response.json();     
    return horas; 
    
}

getHoras().then(horas => {

    const horariosSection = document.getElementsByClassName("horarios")[0]

    horas.forEach(horario => {
        const boton = crearBoton("hora")
        const enlace = document.createElement("a"); 
        enlace.href = "/TFG/pagarCampo"; 
        enlace.target = "_self"; 
        enlace.textContent = horario.hora_inicio; 

        boton.appendChild(enlace)

        horariosSection.appendChild(boton)        
    });
    
})