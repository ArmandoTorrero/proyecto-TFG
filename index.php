<?php


require_once './core/router.php';

session_start();

$router = new Router();


$router->add('/', 'UsuariosController@landingPage');
$router->add('/registro', 'UsuariosController@create');
$router->add('/validarRegistro', 'UsuariosController@validarDatosRegistro');
$router->add('/login', 'UsuariosController@login');
$router->add('/validarLogin', 'UsuariosController@validarDatosLogin');
$router->add('/editarUsuario', 'UsuariosController@editarUsuario');
$router->add('/editarUsuarioVersionAdmin', 'UsuariosController@editarUsuarioVersionAdmin');
$router->add('/cerrarSesion', 'UsuariosController@cerrarSesion');
$router->add('/PyR', 'UsuariosController@PyR');
$router->add('/perfil', 'UsuariosController@perfil');
$router->add('/politicaPrivacidad', 'UsuariosController@politicaPrivacidad');
$router->add('/politicaProteccionDatos', 'UsuariosController@politicaProteccionDatos');
$router->add('/terminosCondiciones', 'UsuariosController@terminosCondiciones');
$router->add('/contactanos', 'UsuariosController@contactanos');

$router->add('/camposModalidad', 'CamposController@camposModalidad');
$router->add('/modalidades', 'CamposController@modalidades');
$router->add('/camposDeportivos', 'CamposController@index');
$router->add('/reservarCampo', 'CamposController@reservarCampo');
$router->add('/pagarCampo', 'ReservasController@pagarCampo');
$router->add('/pasarelaPago', 'ReservasController@pagarCampoVista');


// Rutas que mandan json_encode
$router->add('/logueado', 'UsuariosController@estaLogueado');
$router->add('/userInfo', 'UsuariosController@getUserInfo');
$router->add('/usuarios', 'UsuariosController@getAllUsers');
$router->add('/eliminarUsuario', 'UsuariosController@eliminarUsuario');
$router->add('/buscarUsuario', 'UsuariosController@buscarUsuario');
$router->add('/getCampos', 'CamposController@getCampos');
$router->add('/getCampoById', 'CamposController@getCampoById');
$router->add('/infoCampo', 'CamposController@infoCampo');
$router->add('/editCampo', 'CamposController@editCampo');
$router->add('/eliminarCampo', 'CamposController@eliminarCampo');
$router->add('/modalidadCampos', 'CamposController@getCamposByModalidad');
$router->add('/nombreCampo', 'CamposController@mandarNombreCampo');
$router->add('/precioCampo', 'CamposController@mandarPrecioCampo');
$router->add('/modalidadId', 'CamposController@getModalidadIdByIdCampo');
$router->add('/modalidad', 'CamposController@getModalidad');
$router->add('/reservasUsuario', 'ReservasController@getReservasByUserId');
$router->add('/reservas', 'ReservasController@getAllReservas');
$router->add('/eliminarReserva', 'ReservasController@eliminarReserva');
$router->add('/reservasByFecha', 'ReservasController@getReservasByFecha');
$router->add('/horariosDinamicos', 'FranjaHorariaController@mandarHorariosDinamicos');
$router->add('/getHorarios', 'FranjaHorariaController@getHorarios');
$router->add('/crearHorario', 'FranjaHorariaController@crearHorario');
$router->add('/fechasCampo', 'FranjaHorariaController@mandarFechasCampo');
$router->add('/horarioInfo', 'FranjaHorariaController@getHorarioInfo');
$router->add('/getHorarioById', 'FranjaHorariaController@getHorarioById');
$router->add('/editarHorario', 'FranjaHorariaController@editHorario');
$router->add('/eliminarHorario', 'FranjaHorariaController@eliminarHorario');
$router->add('/getInfoPistaHorarioByIdHorario', 'FranjaHorariaController@getInfoPistaHorarioByIdHorario');
$router->add('/getHorariosByFecha', 'FranjaHorariaController@getHorariosByFecha');

$requestUri = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';
// Simulación de petición
$router->dispatch($requestUri);
