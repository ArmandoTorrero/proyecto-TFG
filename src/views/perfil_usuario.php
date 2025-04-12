<?php  
    ob_start();
    echo $_SESSION["nombre_usuario"] ?? 'invitado';  
    echo $_SESSION["id_usuario"] ?? ''; 
?>
    <head>

    </head>
    
    <main>
        <a href="/TFG/logout">Cerrar Sesion</a>
    </main>

    <script type="module" src="public/JS/perfil.js"></script>
<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>