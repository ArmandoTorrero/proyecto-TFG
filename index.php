<?php 
    require_once 'core/router.php';
    $router = new Router();


    $router->dispatch($_SERVER['REQUEST_URI']);
?>