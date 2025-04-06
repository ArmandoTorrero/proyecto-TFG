<?php 
    require_once 'core/router.php';

    session_start(); 
    
    $router = new Router();

    $router->add('/', 'UsuariosController@landingPage'); 
    $router->add('/registro','UsuariosController@create'); 
    $router->add('/login','UsuariosController@login'); 
    $router->add('/PyR','UsuariosController@PyR');

    $router->add('/pagarCampo','ReservasController@pagarCampo'); 

    $router->add('/modalidades','CamposController@modalidades'); 
    $router->add('/camposDeportivos', 'CamposController@index'); 
    $router->add('/reservarCampo','CamposController@reservarCampo'); 
    $router->add('/horarios', 'CamposController@mandarHorarios'); 

    $requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
// Simulación de petición
    $router->dispatch($requestUri);

?>