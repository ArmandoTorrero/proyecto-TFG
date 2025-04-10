<?php 
    require_once 'core/router.php';

    session_start(); 
    
    $router = new Router();


    $router->add('/', 'UsuariosController@landingPage'); 
    $router->add('/registro','UsuariosController@create'); 
    $router->add('/login','UsuariosController@login'); 
    $router->add('/PyR','UsuariosController@PyR');
    $router->add('/perfil', 'UsuariosController@perfil'); 
    
    $router->add('/modalidades','CamposController@modalidades'); 
    $router->add('/camposDeportivos', 'CamposController@index'); 
    $router->add('/reservarCampo','CamposController@reservarCampo'); 
    
    $router->add('/pagarCampo','ReservasController@pagarCampo'); 
    
    
    // Rutas que mandan json_encode
    $router->add('/logueado','UsuariosController@estaLogueado'); 
    $router->add('/getCampos', 'CamposController@getCampos');  
    $router->add('/nombreCampo', 'CamposController@mandarNombreCampo');  
    $router->add('/fechasCampo', 'CamposController@mandarFechasCampo'); 
    $router->add('/horariosDinamicos', 'CamposController@mandarHorariosDinamicos'); 



    $requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
// Simulación de petición
    $router->dispatch($requestUri);

?>