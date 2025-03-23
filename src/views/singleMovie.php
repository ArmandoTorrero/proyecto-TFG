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

            <article class="movie-logo-title-description">
                <article class="img"></article>
                <article class="text">
                    <h1></h1>
                    <p></p>
                </article>
            </article>

            <article class="trailer">
                <iframe src="" frameborder="0" allowfullscreen ></iframe>
            </article>

        </section>
    </main>

    <script type="module" src="public/JS/singleMovie.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>