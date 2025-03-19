async function getPersonajes() {
    try {
        let response = await fetch('https://magicloops.dev/api/loop/f0813363-8f69-41e9-8d9a-f26ebc510821/run?query=Get+movie+info');
        let data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}
// api peliculas
 
getPersonajes()


