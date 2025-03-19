<?php 
    require_once 'core/router.php';
    $router = new Router();

    $router->add('/', 'PeliculasController@index');

    echo __DIR__; 


    $router->dispatch($_SERVER['REQUEST_URI']);
?>