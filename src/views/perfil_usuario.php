<?php  
    ob_start();
?>
    <head>
        <link rel="stylesheet" href="public/CSS/perfil.css">
    </head>
    
    <main>
        <section class="user-info">
            
        </section>
        <section class="user-reservas"></section>
    </main>

    <script type="module" src="public/JS/perfil.js"></script>
<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>