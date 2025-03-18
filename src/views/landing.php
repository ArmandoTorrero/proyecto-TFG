<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="../../PUBLIC/CSS/landing.css">
    </head>
    <section class="hero-section">
        
    </section>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
    echo __DIR__; 
?>
