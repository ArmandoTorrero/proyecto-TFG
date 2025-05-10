<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="./public/CSS/camposModalidad.css">
    </head>

    <main>
        <section class="campos-container"></section>
    </main>

    <script type="module" src="./public/JS/camposModalidad.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>