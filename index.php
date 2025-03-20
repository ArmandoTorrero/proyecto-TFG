<?php 
    require_once 'core/router.php';
    require_once __DIR__ . '/src/controllers/PeliculasController.php'; 
    require_once __DIR__ . '/src/controllers/UsuariosController.php'; 
    require_once __DIR__ . '/src/controllers/PlanesFidelizacionController.php';




    $route = $_GET['route'] ?? 'planes/index';
    
    $peliculasController = new PeliculasController();
    $usuariosController = new UsuariosController();
    $planesFidelizacionController = new PlanesFidelizacionController();

    switch ($route) {
        case 'landing':
            $peliculasController->index();
            break;
        case 'user/login':
            $usuariosController->login();
            break;
        case 'user/register':
            $usuariosController->create();
            break;
        case 'planes/index':
            $planesFidelizacionController->index();
            break;
        default:
            echo "404";
            break;
    }
?>

