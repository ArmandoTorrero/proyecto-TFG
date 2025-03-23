<?php  
    ob_start(); 
?>

    <h1>hola</h1>



    <script type="module" src=""></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
