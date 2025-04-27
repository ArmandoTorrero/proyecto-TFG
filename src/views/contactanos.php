<?php  
    ob_start(); 
?>

<head>
    <link rel="stylesheet" href="public/CSS/contactanos.css">
</head>

<main>
    <section class="title">
        <h1>Contactanos</h1>
        <p>¿Tienes dudas, sugerencias o necesitas ayuda? ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros a través de cualquiera de los siguientes medios:</p>
    </section>

    <section class="info-contact-containers">

        <article class="contact-container">
            <i class="fa-solid fa-envelope"></i>
            <h2>Correo electronico</h2>
            <p>campoLibre@gmail.com</p>
        </article>
        <article class="contact-container">
            <i class="fa-solid fa-phone"></i>
            <h2>Telefono de contacto</h2>
            <p>+34 600 000 000</p>
        </article>
        <article class="contact-container">
            <i class="fa-solid fa-message"></i>
            <h2>Redes sociales</h2>
            <section class="RRSS-container">
                <a href="#" target="_self"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" target="_self"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" target="_self"><i class="fa-brands fa-instagram"></i></a>
            </section>
        </article>
         
    </section>
</main>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>