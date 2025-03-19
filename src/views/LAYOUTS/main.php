<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="public/CSS/style.css">
        <title>Cineflow</title>
    </head>
    <body>
        <nav>
            <a class="nombre-cine" href="#" target="_self">CineFlow</a>
            <article class="enlaces">
                <a href="#" target="_blank">Comida y bebida</a>
                <a href="#" target="_blank">Nuestros planes</a>
                <a href="#" target="_blank">Peliculas</a>
            </article>
            <a class="user-icon" href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-person"></i></a>
        </nav>

        <!-- Aquí se incluirá el contenido de las vistas -->
         <?php echo $content?>

        <footer>
            <section class="services">
                <article class="single-service">
                    <h1>Peliculas</h1>
                    <a href="#" target="_blank" >Explorar</a>
                </article>
                <article class="single-service">
                    <h1>Menus</h1>
                    <a href="#" target="_blank" >Snacks</a>
                    <a href="#" target="_blank">Bebidas</a>
                    <a href="#" target="_blank">Menus combinados</a>
                </article>
                <article class="single-service">
                    <h1>Suscripciones</h1>
                    <a href="#" target="_blank" >Empezar</a>
                </article>
            </section>
            <hr>
            <section class="politics-RRSS">
                <p>&copy 2025 CineFlow</p>
                <article class="web-politics">
                    <a href="#" target="_blank">Terminos y condiciones</a>
                    <a href="#" target="_blank">Politica de privacidad</a>
                </article>
                <article class="RRSS">
                    <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-youtube"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-twitter"></i></a>
                </article>
            </section>
        </footer>
    </body>
</html>