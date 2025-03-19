<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/login.css">
    </head>

    <section class="izquierda-derecha">

        <section class="izquierda">
            <h1>Iniciar sesion</h1>

            <form action="" method="post">

                <article class="label-input">
                    <label for="">Correo</label>
                    <input type="email" name="correo" id="correo">
                </article>
                <article class="label-input">
                    <label for="">Contraseña</label>
                    <input type="email" name="passwd" id="passwd">
                </article>

                <button type="submit" class="login">Iniciar sesión</button>

            </form>

            <article class="izquierda-enlaces">
                <a href="" target="_self">¿No tienes cuenta? Crea una aqui</a>
                <a href="" target="_self">Entrar como invitado</a>
            </article>

        </section>

        <section class="derecha"></section>

    </section>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
