<?php 
    require_once 'core/router.php';

    session_start(); 
    
    $router = new Router();

    $router->add('/', 'UsuariosController@landingPage'); 
    $router->add('/registro','UsuariosController@create'); 
    $router->add('/login','UsuariosController@login'); 
    $router->add('/PyR','UsuariosController@PyR');
    $router->add('/perfil', 'UsuariosController@perfil'); 
    $router->add('/logueado','UsuariosController@estaLogueado'); 

    $router->add('/modalidades','CamposController@modalidades'); 
    $router->add('/camposDeportivos', 'CamposController@index'); 
    $router->add('/reservarCampo','CamposController@reservarCampo'); 
    $router->add('/pagarCampo','ReservasController@pagarCampo'); 
    
    $router->add('/horarios', 'CamposController@mandarHorarios');
    $router->add('/getCampos', 'CamposController@getCampos');  

    $requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
// Simulación de petición
    $router->dispatch($requestUri);

?>