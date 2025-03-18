<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="../../PUBLIC/CSS/landing.css">
    </head>
    <section class="hero-section">
        <article class="content">
            <h1>Experimenta la <i>Magia</i> <br> del cine</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente velit nostrum voluptates ipsam aut non officiis quidem dolore saepe suscipit sint a distinctio incidunt quisquam est reprehenderit, nisi beatae iste.</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">Peliculas</a>
        </article>
    </section>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
    echo __DIR__; 
?>
