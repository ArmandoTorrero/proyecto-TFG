<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="./public/CSS/login.css">
    </head>

    <main>

        <div class="alert alert-success" role="alert" id="alerta-verde"></div>

        <div class="alert alert-danger" role="alert" id="alerta-roja"></div>

        <section class="form-container">

            <article class="icon">
                <i class="fa-solid fa-user"></i>
            </article>

            <h2>Iniciar sesión</h2>

            <form action="" method="post" id="miForm">

                <article class="label-input">
                    <label for="">Correo</label>
                    <input type="email" name="correo" id="correo">
                    <span class="emailSpan">El email no es valido</span>
                </article>
                <article class="label-input">
                    <article class="passwd">
                        <label for="">Contraseña</label>
                    </article>
                    <input type="password" name="passwd" id="passwd">
                    <span class="passwdSpan">La contraseña debe de tener minimo 5 caracteres</span>
                </article>
                <input type="checkbox" name="mostrar_passwd" id="mostrar_passwd">
                <label for="">Mostrar contraseña</label>

                <button type="submit" class="enviar disabled" disabled >Iniciar sesión</button>

            </form>

            <article class="enlaces">
                <p>¿No tienes una cuenta? <a href="/TFG/registro" target="_self" >Crea una aqui</a></p>
            </article>


        </section>

        <section class="bienvenida">
            <h1>Reserva tu pista deportiva favorita con CampoLibre</h1>
            <p>Entra en el mundo del deporte y la diversión. Con Campolibre podrás reservar tu pista deportiva favorita de forma rápida y sencilla.</p>
            <button>
                <a href="/TFG/camposDeportivos" target="_self" >Ver todos los campos</a>
            </button>
        </section>
    </main>

    <script type="module" src="./public/JS/login.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>
