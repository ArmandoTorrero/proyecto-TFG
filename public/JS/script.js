async function getPersonajes() {
    try {
        let response = await fetch('https://magicloops.dev/api/loop/80403407-e7ef-41d2-b041-acd03160acf5/run?dummy=value');
        let data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}
// api peliculas
 
getPersonajes()


