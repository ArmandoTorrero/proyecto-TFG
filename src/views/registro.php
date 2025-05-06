<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="./public/CSS/registro.css">
    </head>

    <main>

       

        <section class="form-container">

            <article class="icon">
                <i class="fa-solid fa-user"></i>
            </article>

            <h1>Registrar usuario</h1>

            <form action="" method="post" id="miForm">

                <article class="label-input">
                    <label for="">Nombre usuario</label>
                    <input type="text" name="username" id="username">
                    <span class="userSpan">El nombre de usuario debe tener entre 3 y 15 caracteres</span>
                </article>
                
                <article class="label-input">
                    <label for="">Correo</label>
                    <input type="email" name="correo" id="email">
                    <span class="emailSpan">El email no es valido</span>
                </article>

                <article class="label-input">
                    <label for="">Contraseña</label>
                    <input type="password" name="passwd" id="passwd">
                    <span class="passwdSpan">La contraseña debe de tener mínimo 5 caracteres</span>
                </article>


                <article class="label-input">
                    <label for="">Teléfono</label>
                    <input type="text" name="tlf" id="tlf">
                    <span class="tlfSpan">El numero de teléfono debe de tener 9 numeros</span>
                </article>

                <article class="militar">
                    <input type="checkbox" name="militar" id="checkbox-militar">
                    <label for="">Soy militar</label>
                </article>

                <article class="label-input" id="input-militar" >
                    <label for="">Escriba su código militar</label>
                    <input type="text" name="id_militar" id="id_militar">
                    <span class="militarSpan">Identificación incorrecta</span>
                </article>

                <button type="submit" class="enviar disabled" disabled >Registrar usuario</button>
                <span class="errorMsg">Error</span>

            </form>

            <article class="enlaces">
                <p>¿Ya estas registrado? <a href="/TFG/login" target="_self">Inicia sesión</a></p>
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


    <script type="module" src="./public/JS/registro.js"></script>


<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>