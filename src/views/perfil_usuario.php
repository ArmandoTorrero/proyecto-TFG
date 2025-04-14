<?php  
    ob_start();
?>
    <head>
        <link rel="stylesheet" href="public/CSS/perfil.css">
    </head>
    
    <main>
        <section class="user-info">
            <h1>Datos de la cuenta</h1>
        </section>
        <section class="user-reservas">
            <h1>Reservas</h1>
            <section class="reservas-container"></section>
        </section>
    </main>

    <script type="module" src="public/JS/perfil.js"></script>
<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>