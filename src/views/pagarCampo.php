<?php  
    ob_start(); 
?>

    <head>
        <link rel="stylesheet" href="public/CSS/pagarCampo.css">
    </head>

    <main>

        <section class="form-container">
            <h1>introduce los datos de tu tarjeta</h1>

            <form action="" method="post">

                <article class="label-input">
                    <label for="">Numero de la tarjeta</label>
                    <input type="text" name="numTarjeta" id="numTarjeta" placeholder="0000-0000-0000-0000">
                </article>

                <article class="date-cvc">

                    <article class="label-input">
                        <label for="">Fecha de expiración</label>
                        <input type="text" name="fechaExp" id="fechaExp" placeholder="MM/YY">
                    </article>
                    <article class="label-input">
                        <label for="">CVC</label>
                        <input type="text" name="cvc" id="cvc" placeholder="3 digitos">
                    </article>

                </article>

                <article class="label-input">
                    <label for="">Titular de la tarjeta</label>
                    <input type="text" name="titularTrajeta" id="tlf">
                </article>

                
                <button type="submit" class="confirmar">Confirmar</button>

            </form>
        </section>

    </main>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>