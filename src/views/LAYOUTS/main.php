<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-DQvkBjpPgn7RC31MCQoOeC9TI2kdqa4+BSgNMNj8v77fdC77Kj5zpWFTJaaAoMbC" crossorigin="anonymous">
        <!-- Fuentes de texto -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <!--CSS -->
        <link rel="stylesheet" href="public/CSS/main.css">
        <title>CampoLibre</title>
    </head>
    <body>
        <nav>

            <a href="/TFG/" class="logo">CampoLibre</a>

            <article class="nav-links">
                <a href="#" target="_self">Modalidades</a>
                <a href="#" target="_self">Campos</a>
                <a href="#" target="_self">Contactanos</a>
            </article>

            <article class="menu-hamburguesa">
                <input type="checkbox">
                <div></div>
                <div></div>
                <div></div>
            </article>

            <section class="desplegable">
                <a href="#" target="_self">Modalidades</a>
                <a href="#" target="_self">Campos</a>
                <a href="#" target="_self">Contactanos</a>
            </section>
                
        </nav>

        <!-- Aquí se incluirá el contenido de las vistas -->
         <?php echo $content?>

        <footer>

            <section class="footer-links">

                <h2>CampoLibre</h2>
                <article class="links-1">
                    <a href="/TFG/" target="_self">Inicio</a>
                    <a href="#" target="_self">Contactanos</a>
                    <a href="#" target="_self">Preguntas y respuestas</a>
                </article>
                <article class="links-2">
                    <a href="#" target="_self">Terminos y condiciones</a>
                    <a href="#" target="_self">Politica de privacidad</a>
                    <a href="#" target="_self">Politica de protección de datos</a>
                </article>
                <article class="RRSS">
                    <a href="#" target="_self"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="#" target="_self"><i class="fa-solid fa-envelope"></i></a>
                    <a href="#" target="_self"><i class="fa-brands fa-instagram"></i></a>
                </article>

            </section>

            <hr>

            <section class="derechos">
                <p>&copy 2025 CampoLibre. Todos los derechos reservados.</p>
            </section>
        </footer>


        <script src="https://kit.fontawesome.com/bee72e8c16.js" crossorigin="anonymous"></script>
    </body>
</html>