export function createFoodCard(nombre,precio) {

    // creamos la carta para el comestible
    let foodCard = document.createElement("section")
    foodCard.classList.add("food-card")

    // creamos la imagen y le añadimos la clase
    let imgContainer = document.createElement("article")
    imgContainer.classList.add("food-img")

    // creamos el contenedor del contenido del comestible, le añadaimos la clase y el contenido
    let menu_content = document.createElement("article")
    menu_content.classList.add("menu-content")

    let menu_content_title = document.createElement("h2")
    menu_content_title.textContent = nombre

    let menu_content_price = document.createElement("p")
    menu_content_price.textContent = precio

    // añadimos el h1 y el p a su contenedor
    menu_content.append(menu_content_title,menu_content_price)

    // añadimos el contenedor de la imagen y el contenido del comestible al contenedor padre
    foodCard.append(imgContainer,menu_content)

    return foodCard; 
}