<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/camposDeportivos.css">
    </head>

    <select name="modalidad_id" id="modalidad_id">
        <option value="" selected hidden >Elige una modalidad</option>
        <option value="1">Futbol</option>
        <option value="2">Tenis</option>
        <option value="3">Padel</option>
    </select>

    <section class="campos-container"></section>

    <section class="PyR">
        <h1>Todas tus dudas aclaradas</h1>
        <p>En este apartado resolvemos las dudas acerca de temas de reenbolso, pagos y reserva de pistas deportivas</p>
        <button>
            <a href="#" target="_self">Saber mas</a>
        </button>
    </section>

    <script type="module" src="public/JS/camposDeportivos.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>