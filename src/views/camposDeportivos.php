<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/camposDeportivos.css">
    </head>

    hola

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>