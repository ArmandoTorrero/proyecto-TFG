<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/landing.css">
    </head>

    <!-- Hero section -->
    <section class="hero">
        <h1>RESERVAR CAMPOS DEPORTIVOS MAS FACIL QUE NUNCA</h1>
        <p>Descubre la máxima comodidad al reservar campos deportivos de fútbol, ​​pádel, tenis y baloncesto. Nuestra plataforma intuitiva te permite reservar tu plaza en tan solo unos clics.</p>
        <button>Reservar</button>
    </section>

    <main class="content">
        <h1>Experimente la reserva en línea sin complicaciones  para tus actividades deportivas favoritas</h1>
        <section class="content">

            <article class="single-content">
                <article class="icon"><i class="fa-solid fa-futbol"></i></article>
                <h1>Elige entre opciones de fútbol, ​​pádel, tenis y baloncesto.</h1>
                <p>Reserva tu campo sin esfuerzo y disfruta de una gran variedad de deportes.</p>
                <a href="#" target="_self" ></a>
            </article>

            <article class="single-content">
                <article class="icon"><i class="fa-solid fa-futbol"></i></article>
                <h1>Elige entre opciones de fútbol, ​​pádel, tenis y baloncesto.</h1>
                <p>Reserva tu campo sin esfuerzo y disfruta de una gran variedad de deportes.</p>
                <a href="#" target="_self" ></a>
            </article>

            <article class="single-content">
                <article class="icon"><i class="fa-solid fa-futbol"></i></article>
                <h1>Elige entre opciones de fútbol, ​​pádel, tenis y baloncesto.</h1>
                <p>Reserva tu campo sin esfuerzo y disfruta de una gran variedad de deportes.</p>
                <a href="#" target="_self" ></a>
            </article>

        </section>
    </main>
    

    <script type="module" src="public/JS/script.js"></script>
    

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
