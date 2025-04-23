import { getReservasByUserId } from "./services/reservas";
import { logueado } from "./services/usuario";
import { cardUserInfo } from "./components/cardUserInfo";
import { cardCampoReserva } from "./components/cardCampo";

logueado().then(info => {
    cardUserInfo(info.rol)
})

getReservasByUserId().then(info => {
    console.log(info.reservas.length);
    
    let reservas= document.querySelector(".reservas-container"); 

    if(info.reservas.length == 0){
        let h2 = document.createElement("h2");
        h2.textContent = "No tienes reservas";
        h2.style.color = "#fff"
        reservas.appendChild(h2);
    }else{
        info.reservas.forEach(reserva => {
            reservas.appendChild(cardCampoReserva(reserva.nombre_pista,reserva.precio_hora,reserva.modalidad_id,reserva.fecha,reserva.hora_inicio))
            
        });
    }
})

