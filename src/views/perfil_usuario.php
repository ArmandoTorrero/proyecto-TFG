<?php  
    ob_start();
?>
    <head>
        <link rel="stylesheet" href="public/CSS/perfil.css">
    </head>
    
    <main>

        <div class="alert alert-success" role="alert" id="alerta-verde"></div>

        <div class="alert alert-danger" role="alert" id="alerta-roja"></div>

        <aside>
            <button id="btn_user_info" ><i class="fa-solid fa-user"></i>Detalles de la cuenta</button>
            <button id="btn_user_reservas" ><i class="fa-solid fa-calendar-days"></i>Ver reservas</button>
        </aside>
        <section class="content"></section>
        
        <section class="containerFormUser"></section>
        <section class="containerFormCampo"></section>

    </main>

    <script type="module" src="public/JS/perfil.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>