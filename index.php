<?php 
    require_once 'core/router.php';
    require_once __DIR__ . '/src/controllers/PeliculasController.php'; 
    require_once __DIR__ . '/src/controllers/UsuariosController.php'; 



    $route = $_GET['route'] ?? 'user/login';
    
    $peliculasController = new PeliculasController();
    $usuariosController = new UsuariosController();

    switch ($route) {
        case 'landing':
            $peliculasController->index();
            break;
        case 'user/login':
            $usuariosController->login();
            break;
        default:
            echo "404";
            break;
    }
?>

