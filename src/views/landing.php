<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/landing.css">
    </head>
    <section class="hero-section">
        <article class="content">
            <h1>Experimenta la <i>Magia</i> <br> del cine</h1>
            <p>Sumérgete en la magia del cine y vive historias inolvidables en la gran pantalla. Desde clásicos atemporales hasta los últimos estrenos, tu próxima aventura te espera. ¡Reserva tus entradas ahora!</p>
            <button class="button-enlace">
                <a href="http://" target="_blank" rel="noopener noreferrer">Peliculas</a>
            </button>
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
                    <button class="button-enlace">
                        <a href="http://" target="_blank" rel="noopener noreferrer">Explorar</a>
                    </button>
                </article>
            </article>

            <article class="img-container">
                <article class="content-button">
                    <h1>Compra tus tickets</h1>
                    <button class="button-enlace">
                        <a href="http://" target="_blank" rel="noopener noreferrer">Explorar</a>
                    </button>
                </article>
            </article>

            <article class="img-container">
                <article class="content-button">
                    <h1>Nuestros planes</h1>
                    <button class="button-enlace">
                        <a href="http://" target="_blank" rel="noopener noreferrer">Explorar</a>
                    </button>
                </article>
            </article>

        </section>
    </section>

    <section class="comprar-tickets">

        <article class="comprar-entradas-content">

            <h1>Compra tus entradas facilmente</h1>
            <p>Compra fácil de entradasExplore nuestro sencillo proceso de compra de entradas, 
                donde puede seleccionar sus asientos preferidos y elegir entre varias opciones de 
                pago para asegurar su experiencia cinematográfica.</p>
        </article>
        <article class="comprar-tickets-btns">

            <button>
                <a href="http://" target="_blank" rel="noopener noreferrer">Comprar entradas</a>
            </button>
            <button>
                <a href="http://" target="_blank" rel="noopener noreferrer">Leer mas</a>
            </button>

        </article>

    </section>



    <script src="public/JS/script.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
