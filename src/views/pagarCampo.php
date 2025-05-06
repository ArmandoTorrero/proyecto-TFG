<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="./public/CSS/pagarCampo.css">
    </head>

    <main>

        <section class="form-container">
            <h1>introduce los datos de tu tarjeta</h1>

            <form action="" method="post">

                <article class="label-input">
                    <label for="">Numero de la tarjeta</label>
                    <input type="text" name="numTarjeta" id="numTarjeta" placeholder="0000-0000-0000-0000">
                    <span class="tarjetaSpan">El formato de la tarjeta no es correcto</span>
                </article>

                <article class="date-cvc">

                    <article class="label-input">
                        <label for="">Fecha de expiración</label>
                        <input type="text" name="fechaExp" id="fechaExp" placeholder="MM/YY">
                        <span class="fechaSpan">El formato de la fecha no es correcto</span>
                    </article>
                    <article class="label-input">
                        <label for="">CVC</label>
                        <input type="text" name="cvc" id="cvc" placeholder="3 digitos">
                        <span class="cvcSpan">El CVC solo tiene 3 numeros</span>
                    </article>

                </article>

                <article class="label-input">
                    <label for="">Titular de la tarjeta</label>
                    <input type="text" name="titularTarjeta" id="titularTarjeta">
                    <span class="titularSpan">Solo se permiten letras</span>
                </article>

                
                <button type="submit" class="confirmar" disabled >Confirmar</button>

            </form>
        </section>

        <section class="info">
            <h1 class="nombreCampo"></h1>
            <p class="fecha"></p>
            <p class="hora_inicio"></p>
            <p class="precio"></p>
        </section>

    </main>

    <script type="module" src="./public/JS/pagarCampo.js"></script>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>