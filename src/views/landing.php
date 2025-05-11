<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="./public/CSS/landing.css">
        
    </head>

    <!-- Hero section -->
    <section class="hero">
        
        <article class="hero-content animate__animated animate__fadeInLeft">
            <h1>Reservar campos deportivos <b>más facil que nunca</b></h1>
            <p>Descubre la máxima comodidad al reservar campos deportivos de fútbol, pádel, tenis y baloncesto. Nuestra plataforma intuitiva te permite reservar tu plaza en tan solo unos clics.</p>
            <button>
                <a href="/TFG/camposDeportivos" target="_self">Reservar</a>
            </button>
        </article>   

        <article class="img animate__animated animate__fadeInRight"></article>

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
                <i class="fa-solid fa-calendar-days"></i>
                <h2>Amplia disponibilidad</h2>
                <p>Horarios flexibles de 16:00 a 22:00 para adaptarse a tu rutina diaria y permitirte disfrutar del deporte cuando quieras.</p>
            </article>
    
            <article class="container">
                <i class="fa-solid fa-futbol"></i>
                <h2>Variedad de deportes</h2>
                <p>Accede a una amplia selección de instalaciones para diferentes deportes: fútbol, baloncesto, tenis, pádel y más.</p>
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
                    <h2></h2>
    
                    <article class="precio-button">
                        <span class="precio"></span>
                        <button class="ver-detalles" >
                            <a href="#" target="_self"></a>
                        </button>
                    </article>
                </section>
                <p class="categoria"></p>

            </article>

            <article class="pista">

                <article class="img"></article>

                <section class="content">
                    <h2></h2>
    
                    <article class="precio-button">
                        <span class="precio"></span>
                        <button class="ver-detalles" >
                            <a href="#" target="_self"></a>
                        </button>
                    </article>
                </section>
                <p class="categoria"></p>

            </article>

            <article class="pista">

                <article class="img"></article>

                <section class="content">
                    <h2></h2>
    
                    <article class="precio-button">
                        <span class="precio"></span>
                        <button class="ver-detalles" >
                            <a href="#" target="_self"></a>
                        </button>
                    </article>
                </section>
                <p class="categoria"></p>

            </article>

        </section>

        <button class="ver-campos">
            <a href="/TFG/camposDeportivos" target="_self">Ver todos los campos</a>
        </button>

    </section>

    
    <section class="pre-footer">
        <h1>¡Comienza a disfrutar del deporte hoy mismo!</h1>
        <p>Reserva tu primera instalación deportiva en minutos y descubre lo fácil que es con CampoLibre.</p>
        <article class="buttons">
            <button>
                <a href="/TFG/login" target="_self">Iniciar sesión</a>
            </button>
            <button>
                <a href="/TFG/camposDeportivos" target="_self">Ver todos los campos</a>
            </button>
        </article>
    </section>
    
    <section class="tiempo"></section>
    
    <script type="module" src="./public/JS/landing.js"></script>
    <script type="module" src="./public/JS/api_tiempo.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
