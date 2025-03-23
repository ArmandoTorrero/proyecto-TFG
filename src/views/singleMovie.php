<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/singleMovie.css">
    </head>

    <main class="arriba-abajo">

        <section id="arriba">
            <h1></h1>
            <h3></h3>
        </section>

        <section id="abajo">

            <section class="movie-logo-title-description">
                <article class="img"></article>
                <article class="text">
                    <h1></h1>
                    <p></p>
                </article>
            </section>

            <section class="trailer">
                <iframe src="" frameborder="0" allowfullscreen ></iframe>
            </section>

            <section class="select-date-time">

                <article class="select-date-section">
                    <label for="fecha">Seleccionar fecha</label>
                    <select name="date" id="fecha">Selecciona una fecha</select>
                </article>

                <article class="select-time-section">
                    <label for="hora">Elija una hora</label>
                    <article class="times-buttons">
                        <button><a href="http://" target="_blank" rel="noopener noreferrer">21:30</a></button>
                        <button><a href="http://" target="_blank" rel="noopener noreferrer">21:30</a></button>
                        <button><a href="http://" target="_blank" rel="noopener noreferrer">21:30</a></button>
                    </article>
                </article>

            </section>

        </section>
    </main>

    <script type="module" src="public/JS/singleMovie.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>