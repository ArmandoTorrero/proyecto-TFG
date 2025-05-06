<?php  
    ob_start(); 
?>

<head>
    <link rel="stylesheet" href="./public/CSS/politicaPrivacidad.css">
</head>

<main>
    <section class="title">
        <h1>Términos y condiciones</h1>
    </section>
    <section class="info">
        
        <article class="epigrafe">
            <h2>1-Objeto</h2>
            <p>El presente documento regula el uso del sitio web CampoLibre y los servicios ofrecidos a través del mismo, incluyendo la gestión de reservas deportivas, acceso a información y funcionalidades adicionales.<p>
        </article>
        <article class="epigrafe">
            <h2>2-Aceptación del usuario</h2>
            <p>El uso de este sitio implica la aceptación plena y sin reservas de todos los términos y condiciones aquí establecidos. Si no está de acuerdo, por favor absténgase de utilizar el sitio o los servicios.</p>
        </article>
        <article class="epigrafe">
            <h2>3-Acceso al servicio</h2>
            <ul>
                <li>El acceso al sitio es, en general, libre y gratuito.</li>
                <li>Algunos servicios pueden requerir registro previo del usuario mediante la creación de una cuenta.</li>
                <li>El usuario se compromete a proporcionar información veraz y mantenerla actualizada.</li>
            </ul>
        </article>
        <article class="epigrafe">
            <h2>4-Responsabilidades del usuario</h2>
            <p>Al utilizar esta plataforma, usted se compromete a:</p>
            <ul>
                <li>No realizar reservas falsas o fraudulentas.</li>
                <li>No alterar, dañar o afectar el funcionamiento del sistema.</li>
                <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos.</li>
                <li>Respetar los derechos de propiedad intelectual y las normativas aplicables.</li>
            </ul>
        </article>
        <article class="epigrafe">
            <h2>5-Reservas y cancelaciones</h2>
            <ul>
                <li>El usuario podrá realizar reservas a través de la plataforma, sujetas a disponibilidad.</li>
                <li>En caso de cancelación, deberán seguirse las condiciones establecidas en el apartado correspondiente.</li>
                <li>La empresa se reserva el derecho de modificar o anular reservas por causas justificadas.</li>
            </ul>
        </article>

    </section>
</main>



<?php 
    $content = ob_get_clean(); 
    require __DIR__ . '/../views/LAYOUTS/main.php';
?>