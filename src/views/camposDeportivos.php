<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/camposDeportivos.css">
    </head>

    <section class="campos-container">

        <article class="campo">
            <div class="img"></div>
            <h2>Grupo Junta del Puerto</h2>
            <button>
                <a href="/TFG/reservarCampo" target="_self">Reservar</a>
            </button>
        </article>

    </section>

    <section class="PyR">
        <h1>Todas tus dudas aclaradas</h1>
        <p>En este apartado resolvemos las dudas acerca de temas de reenbolso, pagos y reserva de pistads deportivas</p>
        <button>
            <a href="#" target="_self">Saber mas</a>
        </button>
    </section>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>