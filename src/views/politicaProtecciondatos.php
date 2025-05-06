<?php  
    ob_start(); 
?>
    <head>
        <link rel="stylesheet" href="./public/CSS/politicaPrivacidad.css">
    </head>

    <main>

        <section class="title">
            <h1>Política de protección de datos</h1>
        </section>

        <section class="info">

            <article class="epigrafe">
                <h2>1-Responsable del Tratamiento</h2>
                <p>El responsable del tratamiento de los datos personales recabados a través de este sitio web es:</p>
                <ul>
                    <li>Nombre de la entidad: CampoLibre</li>
                    <li>Correo electrónico: campoLibre@gmail.com</li>
                    <li>Finalidad del sitio: gestión de reservas</li>
                </ul>
            </article>

            <article class="epigrafe">
                <h2>2-Datos que Recopilamos</h2>
                <p>A través de este sitio web podemos recopilar los siguientes datos personales:</p>
                <ul>
                    <li>Nombre</li>
                    <li>Dirección de correo electronico</li>
                    <li>Número de telefono</li>
                    <li>Información relacionada con el uso de nuestros servicios</li>
                    <li>Datos de navegación mediante cookies</li>
                </ul>
            </article>

            <article class="epigrafe">
                <h2>3-Finalidad del Tratamiento</h2>
                <p>Tus datos personales se utilizarán para:</p>
                <ul>
                    <li>Gestionar tu relación con nosotros (por ejemplo, atención al cliente o reservas)</li>
                    <li>Enviarte comunicaciones relacionadas con nuestros servicios</li>
                    <li>Mejorar la experiencia del usuario en el sitio web</li>
                    <li>Cumplir con obligaciones legales</li>
                </ul>
            </article>

            <article class="epigrafe">
                <h2>4-Legitimación</h2>
                <p>El tratamiento de tus datos se basa en:</p>
                <ul>
                    <li>Tu consentimiento explícito</li>
                    <li>La ejecución de un contrato o precontrato</li>
                    <li>El cumplimiento de obligaciones legales</li>
                </ul>
            </article>

            <article class="epigrafe">
                <h2>5-Conservación de los Datos</h2>
                <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados, o hasta que solicites su supresión.</p>
            </article>

            <article class="epigrafe">
                <h2>6-Destinatarios de los Datos</h2>
                <p>Tus datos no serán cedidos a terceros, salvo obligación legal o en caso de ser necesarios para la prestación del servicio (por ejemplo, proveedores de alojamiento web o servicios técnicos).</p>
            </article>

            <article class="epigrafe">
                <h2>7-Seguridad</h2>
                <p>Implementamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
            </article>

            <article class="epigrafe">
                <h2>9-Cambios en esta Política</h2>
                <p>Nos reservamos el derecho a modificar esta Política de Protección de Datos para adaptarla a novedades legislativas o jurisprudenciales. Te recomendamos revisar esta sección periódicamente.</p>
            </article>

        </section>
    </main>


<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>