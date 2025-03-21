<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="public/CSS/registro.css">
    </head>

    <section class="izquierda-derecha">

        <section class="izquierda">
            <h1>Registrar usuario</h1>

            <form action="" method="post">

                <article class="label-input">
                    <label for="">Nombre usuario</label>
                    <input type="text" name="username" id="username">
                </article>
                <article class="label-input">
                    <label for="">Correo</label>
                    <input type="email" name="email" id="email">
                </article>
                <article class="label-input">
                    <label for="">Contraseña</label>
                    <input type="password" name="paswd" id="passwd">
                </article>
                <article class="label-input">
                    <label for="">Telefono</label>
                    <input type="text" name="tlf" id="tlf">
                </article>

                <button type="submit" class="login">Registrar usuario</button>

            </form>

            <article class="izquierda-enlaces">
                <a href="" target="_self">¿Ya estas registrado? Inicia sesión</a>
                <a href="" target="_self">Entrar como invitado</a>
            </article>

        </section>

        <section class="derecha"></section>

    </section>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>