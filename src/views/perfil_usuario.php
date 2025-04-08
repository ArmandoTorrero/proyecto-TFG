<?php  
    ob_start();
    echo $_SESSION["nombre_usuario"];  
    echo $_SESSION["id_usuario"]
?>


<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>