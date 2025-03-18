<?php  
    ob_start(); 
?>
    


<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
    echo __DIR__; 
?>
