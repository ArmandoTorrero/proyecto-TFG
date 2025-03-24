<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/landing.css">
    </head>

    <!-- Hero section -->
    <section class="hero-section">
        <article class="content">
            <h1>Experimenta la <i>Magia</i> <br> del cine</h1>
            <p>Sumérgete en la magia del cine y vive historias inolvidables en la gran pantalla. Desde clásicos atemporales hasta los últimos estrenos, tu próxima aventura te espera. ¡Reserva tus entradas ahora!</p>
            <button class="button-enlace">
                <a href="http://" target="_blank" rel="noopener noreferrer">Peliculas</a>
            </button>
        </article>
    </section>

    <!-- Nuestros servicios -->

    <section class="nuestros-servicios">

        <article class="nuestros-servicios-title">
            <h1>Nuestros servicios</h1>
        </article>

        <section class="nuestros-servicios-containers">

            <article class="img-container">
                <article class="content-button">
                    <h1>Comida y bebida</h1>
                    <button class="button-enlace">
                        <a href="/TFG/food" target="_blank" rel="noopener noreferrer">Explorar</a>
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

    <!-- Cartelera -->

    <section id="cartelera"></section>

    <!-- Sección de comida -->
    
    <section class="opciones-deliciosas">

        <article class="menus-header">

        
            <section class="menus-titles">
                <h1>Opciones deliciosas</h1>
                <p>Explora nuestros deliciosos snacks y <br>
                refrescantes bebidas para tu noche de pelicula.</p>
            </section>
            <section class="menu-enlace">
                <a href="http://" target="_blank">Ver menus</a>
            </section> 
             
        </article>

        <article class="menus-container"></article>

    </section>

    <!-- Comprar tickets -->

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


    <script type="module" src="public/JS/script.js"></script>
    

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
