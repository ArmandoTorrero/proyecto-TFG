<?php 
    require_once 'core/router.php';
    require_once __DIR__ . '/src/controllers/PeliculasController.php'; 

    $route = $_GET['route'] ?? 'landing';
    
    $peliculasController = new PeliculasController();

    switch ($route) {
        case 'landing':
            $peliculasController->index();
            break;
        case 'label':
            # code...
            break;
        default:
            # code...
            break;
    }
?>

<head>
    <link rel="stylesheet" href="/public/CSS/landing.css">
</head>