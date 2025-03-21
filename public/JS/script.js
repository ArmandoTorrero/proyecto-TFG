import { createMoviesSection } from "../JS/components/movieCards";


async function getPersonajes() {
    try {
        let response = await fetch('https://magicloops.dev/api/loop/99839694-94f9-4022-9ab1-ecd7b266a112/run?request=get_current_movies');
        let data = await response.json();
        console.log(data);
        

        
    } catch (error) {
        console.error(error);
    }
} 

getPersonajes()
// api peliculas
let movies = {"movies":[{"name":"BLANCANIEVES","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/blancanieves_2025.jpg"},{"name":"NOVOCAINE","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/novocaine_2025.jpg"},{"name":"WOLFGANG (EXTRAORDINARIO)","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/wolfgang_extraordinario_2025.jpg"},{"name":"EL DIA QUE LA TIERRA EXPLOTO: LOONEY TUNES","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/El_dia_Tierra_exploto_Looney_Tunes_2024.jpg"},{"name":"MICKEY 17","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/mickey_17_2025.jpg"},{"name":"PRESENCE","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/presence_2024.jpg"},{"name":"UNA PELICULA DE MINECRAFT","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/una_pelicula_de_Minecraft_2025.jpg"},{"name":"A COMPLETE UNKNOWN","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/un_completo_desconocido_2024.jpg"},{"name":"EL SECRETO DEL ORFEBRE","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/el_secreto_del_orfebre_2025.jpg"},{"name":"PADDINGTON: AVENTURA EN LA SELVA","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/Paddington_Aventura_en_la_selva_2024.jpg"},{"name":"THE MONKEY","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/the_monkey_2025.jpg"},{"name":"CAPITAN AMERICA: BRAVE NEW WORLD","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/Captain_America_Brave_new_world_2025.jpg"},{"name":"CONCLAVE","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/Conclave_2024.jpg"},{"name":"MUFASA: EL REY LEÓN","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/mufasa_the_lion_king_2024.jpg"},{"name":"ANORA","duration":"120 min","coverImage":"https://www.compraentradas.com/img/Carteles/Anora_2024.jpg"}]}

let peliculas_ARRAY = movies.movies;

createMoviesSection(peliculas_ARRAY);





