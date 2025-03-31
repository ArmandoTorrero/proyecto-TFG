<?php 
    require_once 'core/router.php';
    
    $router = new Router();

    $router->add('/', 'UsuariosController@landingPage'); 
    $router->add('/registro','UsuariosController@create'); 
    $router->add('/login','UsuariosController@login'); 


    $router->add('/reservarCampo', 'CamposController@index'); 

    $requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
// Simulación de petición
    $router->dispatch($requestUri);

?>