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
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="public/CSS/main.css">
        <title>SportBooking</title>
    </head>
    <body>
        <nav>

            <a href="/TFG/">SpoortBooking</a>

            <section class="links">
                <a href="#">Lorem</a>
                <a href="#">Lorem</a>
                <a href="#">Lorem</a>
            </section>

            <section class="nav-links">
                <a href="#"><i class="bi bi-person"></i></a>
                <article class="menu-hamburguesa">
                    <input type="checkbox" name="menu" id="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            </section>

            <section class="desplegable"></section>

        </nav>

        <!-- Aquí se incluirá el contenido de las vistas -->
         <?php echo $content?>

        <footer>

            <section class="enviar-email">

                <article class="enviar-email-content">
                    <h1>TE MANTENEMOS INFORMADO</h1>
                    <p>Introduce tu email para enviarte nuevas novedades</p>
                </article>

                <article class="input-button">
                    <input type="email" name="email" id="email" placeholder="Introduce tu email">
                    <button type="submit">Enviar</button>
                </article>

            </section>

            <hr>

            <section class="footer-links">

                <h1>SpoortBooking</h1>
                <article class="links-1">
                    <a href="#">Inicio</a>
                    <a href="#">Contactanos</a>
                    <a href="#">Preguntas y respuestas</a>
                </article>
                <article class="links-2">
                    <a href="#">Terminos y condiciones</a>
                    <a href="#">Politica de privacidad</a>
                    <a href="#">Politica de protección de datos</a>
                </article>
                <article class="RRSS">
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                    <a href="#"><i class="bi bi-envelope"></i></a>
                </article>
            </section>
        </footer>


        <script src="https://kit.fontawesome.com/bee72e8c16.js" crossorigin="anonymous"></script>
    </body>
</html>