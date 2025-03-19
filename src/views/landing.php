<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="../../PUBLIC/CSS/landing.css">
    </head>
    <section class="hero-section">
        <article class="content">
            <h1>Experimenta la <i>Magia</i> <br> del cine</h1>
            <p>Sumérgete en la magia del cine y vive historias inolvidables en la gran pantalla. Desde clásicos atemporales hasta los últimos estrenos, tu próxima aventura te espera. ¡Reserva tus entradas ahora!</p>
            <article class="enlace">
                <a href="">Peliculas</a>
            </article>
        </article>
    </section>

    <section class="nuestros-servicios">

        <article class="nuestros-servicios-title">
            <h1>Nuestros servicios</h1>
        </article>

        <section class="nuestros-servicios-containers">

            <article class="img-container">
                <article class="content-button">
                    <h1>Comida y bebida</h1>
                    <div class="enlace">
                        <a href="">Explorar</a>
                    </div>
                </article>
            </article>

            <article class="img-container">
                <article class="content-button">
                    <h1>Comida y bebida</h1>
                    <div class="enlace">
                        <a href="">Explorar</a>
                    </div>
                </article>
            </article>

            <article class="img-container">
                <article class="content-button">
                    <h1>Comida y bebida</h1>
                    <div class="enlace">
                        <a href="">Explorar</a>
                    </div>
                </article>
            </article>
            
        </section>
    </section>



    <script src="../../PUBLIC/JS/script.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
    echo __DIR__; 
?>
