<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/registro.css">
    </head>

    <main>

        <section class="form-container">

            <article class="icon">
                <i class="fa-solid fa-user"></i>
            </article>

            <h2>Iniciar sesión</h2>

            <form action="" method="post">

                <article class="label-input">
                    <label for="">Correo</label>
                    <input type="email" name="email" id="email">
                </article>
                <article class="label-input">
                    <article class="passwd">
                        <label for="">Contraseña</label>
                        <a href="#" target="_self" >¿Olvidaste la contraseña?</a>
                    </article>
                    <input type="password" name="paswd" id="passwd">
                </article>

                <button type="submit" class="enviar">Iniciar sesión</button>

            </form>

            <article class="enlaces">
                <p>¿No tienes una cuenta? <a href="#" target="_self" >Crea una aqui</a></p>
            </article>


        </section>
    </main>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
