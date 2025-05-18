<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="./public/CSS/reservarCampo.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    </head>

    <section class="reservar">

        <article class="content">

            <h1></h1>
            
            <section class="input-label">
                <label for="">Escoge una fecha para tu reserva</label>
                <input type="date" name="calendario" id="calendario" placeholder="Elige una fecha"> 
                <p class="noHorarios">No hay horarios para esta fecha</p>
            </section>

            <section class="horarios" id="horarios"></section>

        </article>

        <article class="img"></article>

    </section>

    <script type="module" src="./public/JS/reservarCampo.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>