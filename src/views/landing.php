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

    <section class="pistas-destacadas">

        <h1>Instalaciones destacadas</h1>
        <p class="descripcion" >Descubre algunas de nuestras mejores instalaciones deportivas</p>

        <section class="pistas">

            <article class="pista">

                <article class="img"></article>

                <section class="content">
                    <h2>Grupo Junta del Puerto</h2>
    
                    <article class="precio-button">
                        <p class="precio">10€/hora</p>
                        <button class="ver-detalles" >
                            <a href="#" target="_self">Ver detalles</a>
                        </button>
                    </article>
                </section>
                <p class="categoria">Futbol</p>

            </article>

        </section>

        <button class="ver-campos">
            <a href="/TFG/camposDeportivos" target="_self">Ver campos</a>
        </button>

    </section>

    <section class="pre-footer">
        <h1>¡Comienza a disfrutar del deporte hoy mismo!</h1>
        <p>Reserva tu primera instalación deportiva en minutos y descubre lo fácil que es con CampoLibre.</p>
        <article class="buttons">
            <button>
                <a href="#" target="_self">Iniciar sesión</a>
            </button>
            <button>
                <a href="#" target="_self">Ver campos</a>
            </button>
        </article>
    </section>

    <script type="module" src="public/JS/script.js"></script>
    

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
