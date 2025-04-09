<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/reservarCampo.css">
    </head>

    <section class="reservar">

        <article class="content">

            <h1></h1>

            <select name="fecha" id="fecha">
                <option value="" selected hidden >Elige una fecha</option>
                <option value="">naranja</option>
                <option value="">naranja</option>
                <option value="">naranja</option>
            </select>
            
            <section class="horarios"></section>

        </article>

        <article class="img"></article>

    </section>


    <script type="module" src="public/JS/reservarCampo.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>