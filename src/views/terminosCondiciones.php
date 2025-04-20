<?php  
    ob_start(); 
?>

<head>
    <link rel="stylesheet" href="public/CSS/politicaPrivacidad.css">
</head>

<main>
    
</main>



<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>