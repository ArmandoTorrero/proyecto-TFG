import { getReservasByUserId } from "./services/reservas";
import { logueado } from "./services/usuario";
import { cardUserInfo } from "./components/cardUserInfo";
import { cardCampoReserva } from "./components/cardCampo";

logueado().then(info => {
    cardUserInfo(info.rol)
})

getReservasByUserId().then(info => {

    let reservas= document.querySelector(".user-reservas"); 
    info.reservas.forEach(reserva => {
        
        reservas.appendChild(cardCampoReserva(reserva.nombre_pista,reserva.precio_hora,reserva.modalidad_id,reserva.fecha,reserva.hora_inicio))
        
    });
})

