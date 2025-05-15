import { aplicarAnimacion } from "./components/animaciones.js";

document.addEventListener("DOMContentLoaded", () => {
    aplicarAnimacion('.content','bounceInRight')
    aplicarAnimacion('.campo', 'bounceInLeft'); 
})