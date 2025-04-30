<?php 
    require_once 'core/router.php';

    session_start(); 
    
    $router = new Router();


    $router->add('/', 'UsuariosController@landingPage'); 
    $router->add('/registro','UsuariosController@create'); 
    $router->add('/validarRegistro','UsuariosController@validarDatosRegistro');
    $router->add('/login','UsuariosController@login');
    $router->add('/validarLogin','UsuariosController@validarDatosLogin');
    $router->add('/editarUsuario', 'UsuariosController@editarUsuario');  
    $router->add('/editarUsuarioVersionAdmin', 'UsuariosController@editarUsuarioVersionAdmin');  
    $router->add('/cerrarSesion','UsuariosController@cerrarSesion');     
    $router->add('/PyR','UsuariosController@PyR');
    $router->add('/perfil', 'UsuariosController@perfil'); 
    $router->add('/politicaPrivacidad', 'UsuariosController@politicaPrivacidad'); 
    $router->add('/politicaProteccionDatos', 'UsuariosController@politicaProteccionDatos'); 
    $router->add('/terminosCondiciones', 'UsuariosController@terminosCondiciones');
    $router->add('/contactanos', 'UsuariosController@contactanos');
    
    $router->add('/camposModalidad','CamposController@camposModalidad');
    $router->add('/modalidades','CamposController@modalidades'); 
    $router->add('/camposDeportivos', 'CamposController@index'); 
    $router->add('/reservarCampo','CamposController@reservarCampo'); 
    
    $router->add('/pagarCampo','ReservasController@pagarCampo'); 
    
    
    // Rutas que mandan json_encode
    $router->add('/logueado','UsuariosController@estaLogueado');
    $router->add('/userInfo','UsuariosController@getUserInfo');  
    $router->add('/usuarios', 'UsuariosController@getAllUsers');
    $router->add('/getCampos', 'CamposController@getCampos');  
    $router->add('/modalidadCampos','CamposController@getCamposByModalidad'); 
    $router->add('/nombreCampo', 'CamposController@mandarNombreCampo');  
    $router->add('/precioCampo', 'CamposController@mandarPrecioCampo');      
    $router->add('/modalidadId', 'CamposController@getModalidadIdByIdCampo');
    $router->add('/modalidad', 'CamposController@getModalidad');
    $router->add('/reservasUsuario', 'ReservasController@getReservasByUserId');
    $router->add('/horariosDinamicos', 'FranjaHorariaController@mandarHorariosDinamicos'); 
    $router->add('/reservas', 'ReservasController@getAllReservas');
    $router->add('/fechasCampo', 'FranjaHorariaController@mandarFechasCampo'); 
    $router->add('/horarioInfo', 'FranjaHorariaController@getHorarioInfo');
    




    $requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
    // Simulación de petición
    $router->dispatch($requestUri);

?>