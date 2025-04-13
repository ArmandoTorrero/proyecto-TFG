import { getReservasByUserId } from "./services/reservas";
import { logueado } from "./services/usuario";
import { cardUserInfo } from "./components/cardUserInfo";

logueado().then(info => {
    cardUserInfo(info.rol)
})

getReservasByUserId().then(info => {
    info.reservas.forEach(reserva => {
        console.log(reserva);
        
    });
})