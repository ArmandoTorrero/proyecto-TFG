<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/modalidades.css">
    </head>

    <main>

        <section class="content">
            <h1>Descubre hoy mismo el <b>campo deportivo</b> perfecto con CampoLibre</h1>
            <p>Explora nuestra amplia selección de campos deportivos disponibles para reservar. Tanto si planeas un partido informal con amigos como un torneo competitivo, tenemos el campo perfecto para ti. Busca en nuestros listados para encontrar campos que satisfce tus necesidades específicas, incluyendo ubicación y servicios. Reserva tu campo hoy mismo y prepárete para jugar.</p>
        </section>

        <section class="campos">

            <article class="campo">
                <div class="img"></div>
                <h2>Campos de futbol</h2>
                <p>Experimenta la emoción de jugar en nuestros campos de fútbol de primera calidad. </p>
                <button>
                    <a href="/TFG/camposModalidad?modalidad=1" target="_self">Explorar</a>
                </button>
            </article>

            <article class="campo">
                <div class="img">
                    <p>Proximamente</p>
                </div>
                <h2>Campos de tenis</h2>
                <p>Experimenta la emoción de jugar en nuestros campos de tenis de primera calidad. </p>
                <button>
                    <a href="#" target="_self">Explorar</a>
                </button>
            </article>

            <article class="campo">
                <div class="img">
                    <p>Proximamente</p>
                </div>
                <h2>Campos de padel</h2>
                <p>Experimenta la emoción de jugar en nuestros campos de padel de primera calidad. </p>
                <button>
                    <a href="#" target="_self">Explorar</a>
                </button>
            </article>

        </section>
    </main>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>