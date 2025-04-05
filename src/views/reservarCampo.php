<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/reservarCampo.css">
    </head>

    <section class="reservar">

        <article class="content">

            <h1>Grupo Junta del puerto</h1>

            <select name="fecha" id="fehca">
                <option value="">Elige una fecha</option>
            </select>
            
            <section class="horarios"></section>

            <button type="submit" class="finalizar-reserva" >Finalizar reserva</button>

        </article>

    </section>


    <script type="module" src="public/JS/reservarCampo.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>