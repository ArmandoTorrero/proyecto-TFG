<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/reservarCampo.css">
    </head>

    <section class="reservar">

        <article class="content">

            <h1>Grupo Junta del puerto, 2</h1>
            
            <section class="horarios"></section>

        </article>

    </section>


    <script type="module" src="public/JS/reservarCampo.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>