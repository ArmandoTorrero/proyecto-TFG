<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/reservarCampos.css">
    </head>

    <main class="campos">

        <section class="campo">

            <article class="img-campo"></article>
            <article class="campo-content">
                <h1>GRUPO JUNTA DEL PUERTO, 2</h1>
                <button><a href="#" target="_self">Reservar --></a></button>
                <p>2$</p>
            </article>
            
        </section>

        <section class="campo">

            <article class="img-campo"></article>
            <article class="campo-content">
                <h1>GRUPO JUNTA DEL PUERTO, 2</h1>
                <button><a href="#" target="_self">Reservar --></a></button>
                <p>2$</p>
            </article>
            
        </section>

    </main>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>