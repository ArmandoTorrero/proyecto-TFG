import { getReservasByUserId } from "./services/reservas";

getReservasByUserId().then(info => 
    console.log(info)
)