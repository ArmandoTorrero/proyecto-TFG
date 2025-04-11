<?php  
    ob_start();
    echo $_SESSION["nombre_usuario"];  
    echo $_SESSION["id_usuario"]
?>
    <head>

    </head>
    
    <main>

    </main>

    <script type="module" src="public/JS/perfil.js"></script>
<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>