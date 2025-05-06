<?php  
    ob_start(); 
?>

<head>
    <link rel="stylesheet" href="./public/CSS/politicaPrivacidad.css">
</head>

<main> 
    <section class="title">
        <h1>Política de privacidad</h1>
    </section>
    <section class="info">
        <article class="epigrafe">
            <h2>1-Información que recopilamos</h2>
            <p>Podemos recopilar y procesar los siguientes datos personales:</p>
            <ul>
                <li>Nombre, correo electrónico, teléfono u otros datos que nos proporcione mediante formularios.</li>
                <li>Información técnica como dirección IP, tipo de navegador, sistema operativo, etc.</li>
                <li>Datos de navegación (páginas visitadas, tiempo de visita, enlaces clicados).</li>
            </ul>
        </article>
        <aticle class="epigrafe">
            <h2>2-Finalidad del tratamiento</h2>
            <p>Utilizamos su información personal para:</p>
            <ul>
                <li>Gestionar y responder a sus consultas.</li>
                <li>Proporcionar acceso a nuestras funcionalidades o servicios.</li>
                <li>Mejorar la experiencia del usuario.</li>
                <li>Enviar información comercial si ha dado su consentimiento.</li>
                <li>Cumplir con obligaciones legales.</li>
            </ul>
        </aticle>
        <article class="epigrafe">
            <h2>3-Conservación de los datos</h2>
            <p>Sus datos serán almacenados únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos o durante el plazo legal correspondiente.</p>
        </article>
        <article class="epigrafe">
            <h2>4-Compartición de datos</h2>
            <p>No compartimos sus datos personales con terceros, salvo:</p>
            <ul>
                <li>Si estamos legalmente obligados.</li>
                <li>Si es necesario para la prestación del servicio (por ejemplo, proveedores técnicos).</li>
            </ul>
        </article>
        <article class="epigrafe">
            <h2>5-Seguridad de los datos</h2>
            <p>Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra pérdida, uso indebido, acceso no autorizado o alteración.</p>
        </article>
    </section>
</main>

<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>