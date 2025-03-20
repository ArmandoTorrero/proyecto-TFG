<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/planesFidelizacion.css">
    </head>

    <header>
        <h1>Elije tu plan</h1>
        <h3>Vive la magia del cine con ventajas exclusivas <br> solo para nuestros miembros</h3>
    </header>

    <section class="planes-container">

        <article class="plan-container">

            <section class="plan-content">
                <article class="logoName-plan-precio">
                    <h2>Cineflow</h2>
                    <h1>Estandar</h1>
                    <p class="precio">4.99$/mes</p>
                </article>
            </section>
            <article class="beneficios">
                    <ul>
                        <li>Descuentos en entradas</li>
                        <li>Descuentos en combos</li>
                        <li>Acceso a preventas</li>
                        <li>Acceso a eventos exclusivos</li>
                    </ul>
            </article>

        </article>

    </section>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>