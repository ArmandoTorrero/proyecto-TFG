<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/landing.css">
    </head>

    <!-- Hero section -->
    <section class="hero">
        <h1>Reservar campos deportivos <b>más facil que nunca</b></h1>
        <p>Descubre la máxima comodidad al reservar campos deportivos de fútbol, pádel, tenis y baloncesto. Nuestra plataforma intuitiva te permite reservar tu plaza en tan solo unos clics.</p>
        <button>
            <a href="#" target="_self">Reservar</a>
        </button>
    </section>

    <!--Info -->

    <section class="info">

        <h1>Encuentra y <b>reserva</b> tu campo perfecto</h1>
        <p class="descripcion">Ofrecemos la forma más sencilla y rápida de disfrutar del deporte sin complicaciones</p>

        <section class="containers">
            
            <article class="container">
                <i class="fa-solid fa-clock"></i>
                <h2>Reservas al instante</h2>
                <p>Reserva tu instalación deportiva favorita en cuestión de segundos, sin llamadas ni desplazamientos.</p>
            </article>
    
            <article class="container">
                <i class="fa-solid fa-clock"></i>
                <h2>Reservas al instante</h2>
                <p>Reserva tu instalación deportiva favorita en cuestión de segundos, sin llamadas ni desplazamientos.</p>
            </article>
    
            <article class="container">
                <i class="fa-solid fa-clock"></i>
                <h2>Reservas al instante</h2>
                <p>Reserva tu instalación deportiva favorita en cuestión de segundos, sin llamadas ni desplazamientos.</p>
            </article>
            
        </section>


    </section>

    <script type="module" src="public/JS/script.js"></script>
    

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
