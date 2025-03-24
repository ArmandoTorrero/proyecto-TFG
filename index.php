<?php 
    require_once 'core/router.php';
    
    $router = new Router();

    $router->add('/', 'PeliculasController@index');
    $router->add('/singleMovie','PeliculasController@singleMovie'); 
    $router->add('/prueba','PeliculasController@prueba'); 

    
    $router->add('/login', 'UsuariosController@login');

    $router->add('/food','MenusController@index'); 

    $requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
// Simulación de petición
    $router->dispatch($requestUri);

?>